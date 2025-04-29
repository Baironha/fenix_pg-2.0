from flask import Flask, send_file, abort
import os
import logging
import re

app = Flask(__name__)

# Configurar logging
logging.basicConfig(level=logging.INFO)

# Validar nombre de archivo con regex
def es_nombre_archivo_valido(nombre_archivo):
    return re.fullmatch(r"[a-zA-Z0-9_\-ÁÉÍÓÚáéíóúñÑ ]+\.html", nombre_archivo) is not None

# Ruta base segura
BASE_DIR = os.path.abspath(os.path.dirname(__file__))  
GRAFICOS_DIR = os.path.abspath(os.path.join(BASE_DIR, "../Graficos"))  

if not os.path.exists(GRAFICOS_DIR):
    logging.error(f"La carpeta de gráficos no existe: {GRAFICOS_DIR}")
else:
    logging.info(f"La carpeta de gráficos se encuentra en: {GRAFICOS_DIR}")

""" GRAFICO DE LINEAS """
@app.route('/Evolución_de_la_Inflación_Mundial.html')
def get_grafico_inflacion_mundial():
    nombre_archivo = 'Evolución_de_la_Inflación_Mundial.html'
    if not es_nombre_archivo_valido(nombre_archivo):
        abort(400, "Nombre de archivo no válido")
    path = os.path.join(GRAFICOS_DIR, nombre_archivo)
    if os.path.exists(path):
        logging.info(f"Enviando archivo: {path}")
        return send_file(path)
    logging.warning(f"Archivo no encontrado: {path}")
    return f"Archivo no encontrado: {path}", 404

""" GRAFICO DE AREA """
@app.route('/Inflación_Promedio_por_País.html')
def get_grafico_area():
    nombre_archivo = 'Inflación_Promedio_por_País.html'
    if not es_nombre_archivo_valido(nombre_archivo):
        abort(400, "Nombre de archivo no válido")
    path = os.path.join(GRAFICOS_DIR, nombre_archivo)
    if os.path.exists(path):
        logging.info(f"Enviando archivo: {path}")
        return send_file(path)
    logging.warning(f"Archivo no encontrado: {path}")
    return f"Archivo no encontrado: {path}", 404

""" GRAFICO CIRCULAR """
@app.route('/Distribucion_Inflacion_Mundial_Promedio.html')
def get_grafico_circular():
    nombre_archivo = 'Distribucion_Inflacion_Mundial_Promedio.html'
    if not es_nombre_archivo_valido(nombre_archivo):
        abort(400, "Nombre de archivo no válido")
    path = os.path.join(GRAFICOS_DIR, nombre_archivo)
    if os.path.exists(path):
        logging.info(f"Enviando archivo: {path}")
        return send_file(path)
    logging.warning(f"Archivo no encontrado: {path}")
    return f"Archivo no encontrado: {path}", 404

""" GRAFICO ML RL """
@app.route('/Prediccion_vs_Valores_Reales.html')
def get_grafico_ml_rl():
    nombre_archivo = 'Prediccion_vs_Valores_Reales.html'
    if not es_nombre_archivo_valido(nombre_archivo):
        abort(400, "Nombre de archivo no válido")
    path = os.path.join(GRAFICOS_DIR, nombre_archivo)
    if os.path.exists(path):
        logging.info(f"Enviando archivo: {path}")
        return send_file(path)
    logging.warning(f"Archivo no encontrado: {path}")
    return f"Archivo no encontrado: {path}", 404

""" GRAFICO CIRCULAR DT SCIENTS """
@app.route('/grafico_rentabilidad_data_science.html')
def get_grafico_circular_dtscients():
    nombre_archivo = 'grafico_rentabilidad_data_science.html'
    if not es_nombre_archivo_valido(nombre_archivo):
        abort(400, "Nombre de archivo no válido")
    path = os.path.join(GRAFICOS_DIR, nombre_archivo)
    if os.path.exists(path):
        logging.info(f"Enviando archivo: {path}")
        return send_file(path)
    logging.warning(f"Archivo no encontrado: {path}")
    return f"Archivo no encontrado: {path}", 404

""" GRAFICO COLUMNA """
@app.route('/grafico_columna_top3_sitios_datase.html')  
def get_grafico_columna_top3_sitios():
    nombre_archivo = 'grafico_columna_top3_sitios_datase.html'
    if not es_nombre_archivo_valido(nombre_archivo):
        abort(400, "Nombre de archivo no válido")
    path = os.path.join(GRAFICOS_DIR, nombre_archivo)
    if os.path.exists(path):
        logging.info(f"Enviando archivo: {path}")
        return send_file(path)
    logging.warning(f"Archivo no encontrado: {path}")
    return f"Archivo no encontrado: {path}", 404

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
