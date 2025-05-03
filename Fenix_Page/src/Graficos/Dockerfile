FROM python:3.12-slim

# Setea el directorio de trabajo
WORKDIR /app

# Copia el contenido de tu directorio local al contenedor
COPY . /app

# Instala las dependencias
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Instala gunicorn (agregar esta línea explícitamente)
RUN pip install gunicorn

# Expone el puerto que usará Flask
EXPOSE 5000

# Comando para iniciar la app usando Gunicorn
CMD ["gunicorn", "-b", "0.0.0.0:5000", "app:app"]
