from flask import Flask, send_file
import os

app = Flask(__name__)

# Obtener la ruta absoluta correcta de la carpeta donde están los gráficos
BASE_DIR = os.path.abspath(os.path.dirname(__file__))  # Directorio donde está este script
GRAFICOS_DIR = os.path.abspath(os.path.join(BASE_DIR, "../Graficos"))  # Ruta de la carpeta de gráficos


if not os.path.exists(GRAFICOS_DIR):
    print(f"ERROR: La carpeta de gráficos no existe: {GRAFICOS_DIR}")
else:
    print(f"La carpeta de gráficos se encuentra en: {GRAFICOS_DIR}")

""" GRAFICO DE LINEAS """
@app.route('/Evolución_de_la_Inflación_Mundial.html')
def get_grafico_inflacion_mundial():
    path = os.path.join(GRAFICOS_DIR, 'Evolución_de_la_Inflación_Mundial.html')
    if os.path.exists(path):
        print(f"Enviando archivo: {path}")
        return send_file(path)
    else:
        print(f"Archivo no encontrado: {path}")
        return f"Archivo no encontrado: {path}", 404

""" GRAFICO DE AREA """
@app.route('/Inflación_Promedio_por_País.html')
def get_grafico_area():
    path = os.path.join(GRAFICOS_DIR, 'Inflación_Promedio_por_País.html')
    if os.path.exists(path):
        print(f"Enviando archivo: {path}")
        return send_file(path)
    else:
        print(f"Archivo no encontrado: {path}")
        return f"Archivo no encontrado: {path}", 404

""" GRAFICO CIRCULAR"""
@app.route('/Distribucion_Inflacion_Mundial_Promedio.html')
def get_grafico_circular():
    path = os.path.join(GRAFICOS_DIR, 'Distribucion_Inflacion_Mundial_Promedio.html')
    if os.path.exists(path):
        print(f"Enviando archivo: {path}")
        return send_file(path)
    else:
        print(f"Archivo no encontrado: {path}")
        return f"Archivo no encontrado: {path}", 404  

""" GRAFICO ML RL"""
@app.route('/Prediccion_vs_Valores_Reales.html')
def get_grafico_ml_rl():
    path = os.path.join(GRAFICOS_DIR, 'Prediccion_vs_Valores_Reales.html')
    if os.path.exists(path):
        print(f"Enviando archivo: {path}")
        return send_file(path)
    else:
        print(f"Archivo no encontrado: {path}")
        return f"Archivo no encontrado: {path}", 404
    

""" GRAFICO CIRCULAR DT SCIENTS"""
@app.route('/grafico_rentabilidad_data_science.html')
def get_grafico_circular_dtscients():
    path = os.path.join(GRAFICOS_DIR, 'grafico_rentabilidad_data_science.html')
    if os.path.exists(path):
        print(f"Enviando archivo: {path}")
        return send_file(path)
    else:
        print(f"Archivo no encontrado: {path}")
        return f"Archivo no encontrado: {path}", 404



@app.route('/grafico_columna_top3_sitios_datase.html')  
def get_grafico_columna_top3_sitios():
    path = os.path.join(GRAFICOS_DIR, 'grafico_columna_top3_sitios_datase.html')
    if os.path.exists(path):
        print(f"Enviando archivo: {path}")
        return send_file(path)
    else:
        print(f"Archivo no encontrado: {path}")
        return f"Archivo no encontrado: {path}", 404


if __name__ == '__main__':
    app.run(debug=True,  host='0.0.0.0', port=5000)
