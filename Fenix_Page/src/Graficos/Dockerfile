FROM python:3.10

WORKDIR /app

COPY ScriptModeloML.py .
COPY global_inflation_data.csv .

RUN pip install pandas numpy scikit-learn joblib

CMD ["python", "ScriptModeloML.py"]
# Usa una imagen oficial de Python como base
FROM python:3.12-slim

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos del proyecto al contenedor
COPY . /app

# Instala las dependencias
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Expone el puerto que usará Flask
EXPOSE 5000

# Usa gunicorn para correr la app en producción
CMD ["gunicorn", "-w", "4", "-b", "0.0.0.0:5000", "visitas_server:app"]
