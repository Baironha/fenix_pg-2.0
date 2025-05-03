import pandas as pd
import numpy as np
import joblib
import boto3
import os
from dotenv import load_dotenv
from sklearn.model_selection import train_test_split, GridSearchCV
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import mean_squared_error, r2_score, mean_absolute_error
from xgboost import XGBRegressor
import plotly.express as px
from k_aws import AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION, S3_BUCKET_NAME  # importa tus claves

# Cargar datos
df = pd.read_csv("../Dataset/global_inflation_data.csv")


# Preprocesamiento
df_numeric = df.select_dtypes(include='number')
df_numeric.fillna(df_numeric.mean(), inplace=True)

X_features = df_numeric.drop(columns=[df_numeric.columns[-1]])
y_target = df_numeric[df_numeric.columns[-1]]

# Escalado
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X_features)

# División de datos
X_train, X_test, y_train, y_test = train_test_split(X_scaled, y_target, test_size=0.2, random_state=42)

# Definición del grid de hiperparámetros
param_grid = {
    'n_estimators': [500, 1000],
    'learning_rate': [0.01, 0.05],
    'max_depth': [6, 10, 15],
    'subsample': [0.8, 1.0],
    'colsample_bytree': [0.7, 1.0],
    'gamma': [0, 0.1],
}

# Modelo base
model = XGBRegressor(objective='reg:squarederror', random_state=42, verbosity=0)

# Búsqueda de hiperparámetros
grid_search = GridSearchCV(model, param_grid, cv=5, scoring='r2', n_jobs=-1, verbose=0)
grid_search.fit(X_train, y_train)

# Mejor modelo
best_model = grid_search.best_estimator_

# Predicciones
predictions = best_model.predict(X_test)

# Evaluaciones
rmse = np.sqrt(mean_squared_error(y_test, predictions))
mae = mean_absolute_error(y_test, predictions)
r2 = r2_score(y_test, predictions)

print(f"RMSE: {rmse:.4f}")
print(f"MAE: {mae:.4f}")
print(f"R²: {r2:.4f}")

# Guardar el modelo y scaler
MODEL_FILE = "modelo_entrenado_xgb.pkl"
SCALER_FILE = "scaler_xgb.pkl"
joblib.dump(best_model, MODEL_FILE)
joblib.dump(scaler, SCALER_FILE)

print(f"Modelo y scaler guardados localmente.")

# Crear gráfico de comparación real vs predicción
df_results = pd.DataFrame({
    "Índice": range(len(y_test)),
    "Valor Real": y_test.values,
    "Predicción": predictions
})

fig = px.scatter(df_results, x="Índice", y=["Valor Real", "Predicción"],
                 title="Predicción vs Valores Reales",
                 labels={"value": "Inflación (%)", "variable": "Dato"})
fig.write_html("Prediccion_vs_Valores_Reales_Optimizada.html")
print(f"Gráfico guardado como HTML.")

# Subir modelo y scaler a S3
s3_client = boto3.client(
    's3',
    aws_access_key_id=AWS_ACCESS_KEY_ID,
    aws_secret_access_key=AWS_SECRET_ACCESS_KEY,
    region_name=AWS_REGION
)

try:
    s3_client.upload_file(MODEL_FILE, S3_BUCKET_NAME, f"models/{MODEL_FILE}")
    print(f"Modelo subido exitosamente a {S3_BUCKET_NAME}/models/{MODEL_FILE}")

    s3_client.upload_file(SCALER_FILE, S3_BUCKET_NAME, f"models/{SCALER_FILE}")
    print(f"Scaler subido exitosamente a {S3_BUCKET_NAME}/models/{SCALER_FILE}")

    s3_client.upload_file("Prediccion_vs_Valores_Reales_Optimizada.html", S3_BUCKET_NAME, f"graphs/Prediccion_vs_Valores_Reales_Optimizada.html")
    print(f"Gráfico subido exitosamente a {S3_BUCKET_NAME}/graphs/Prediccion_vs_Valores_Reales_Optimizada.html")

except Exception as e:
    print(f"Error subiendo archivos a S3: {e}")
