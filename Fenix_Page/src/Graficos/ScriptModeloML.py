import pandas as pd
import numpy as np
import joblib
from sklearn.impute import SimpleImputer
from sklearn.model_selection import train_test_split
from sklearn.ensemble import GradientBoostingRegressor
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import mean_squared_error, r2_score

# Cargar los datos (ajusta la ruta si es necesario)
df = pd.read_csv("global_inflation_data.csv")

# Preprocesamiento: eliminamos filas con muchos nulos y columnas irrelevantes
df = df.dropna(thresh=int(0.6 * len(df.columns)))

# Rellenar valores nulos con la media
imputer = SimpleImputer(strategy="mean")
df_imputed = pd.DataFrame(imputer.fit_transform(df), columns=df.columns)

# Separar variables predictoras y variable objetivo (ajustar 'target_column')
X = df_imputed.drop(columns=["Inflation Rate"])
y = df_imputed["Inflation Rate"]

# Escalado de los datos
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# División en entrenamiento y prueba
X_train, X_test, y_train, y_test = train_test_split(X_scaled, y, test_size=0.2, random_state=42)

# Entrenamiento del modelo
model = GradientBoostingRegressor()
model.fit(X_train, y_train)

# Evaluación
predictions = model.predict(X_test)
print("MSE:", mean_squared_error(y_test, predictions))
print("R2 Score:", r2_score(y_test, predictions))

# Guardar modelo y scaler
joblib.dump(model, "modelo_entrenado.pkl")
joblib.dump(scaler, "scaler.pkl")