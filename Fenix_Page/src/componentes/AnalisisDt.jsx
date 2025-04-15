import React from 'react'


function AnalisisDt() {
    return (
        <div>
          <h1>Analisis de la inflacion mundial</h1>

          <div id='Seccion'>
              <p>GRAFICO DE LINEAS</p>
              <iframe
                  src="http://127.0.0.1:5000/Evolución_de_la_Inflación_Mundial.html"
                  width="100%"
                  height="500px"
                  title="Distribución de la Inflación Mundial Promedio"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
          </div>

          <br />

          <div id='Seccion'>
              <p>GRAFICO DE AREA</p>
              <iframe
                src="http://127.0.0.1:5000/Inflación_Promedio_por_País.html"
                width="100%"
                height="500px"
                title="Distribución de la Inflación Mundial Promedio"
                frameBorder="0"
                allowFullScreen
              ></iframe>
          </div>

          <br />

          <div id='Seccion'>
              <p>GRAFICO CIRCULAR</p>
              <iframe
                src="http://127.0.0.1:5000/Distribucion_Inflacion_Mundial_Promedio.html"
                width="100%"
                height="500px"
                title="Distribución de la Inflación Mundial Promedio"
                frameBorder="0"
                allowFullScreen
              ></iframe>
          </div>

            <br />

            <div id='Seccion'>
              <p><strong>MODELO DE REGRESION LINEAL DE ML</strong></p>
              <iframe
                src="http://127.0.0.1:5000/Prediccion_vs_Valores_Reales.html"
                width="100%"
                height="500px"
                title="Distribución de la Inflación Mundial Promedio"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>    
      </div>
  )
}

export default AnalisisDt