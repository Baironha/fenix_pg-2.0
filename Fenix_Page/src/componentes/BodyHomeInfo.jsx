import React from "react";
import '../style/BodyInfostyle.css'

function BodyHomeInfo() {
    return (
        <div id="Padre" className="body-container">
            <div id="ContainerImgBodyInfo">
                <img id="ImgBodyInfo" src="https://planmc2.com/wp-content/uploads/2024/06/nebula-eye.webp" alt="" />
            </div>
            <div id="BodyHomeTextos" className="text-container">
                <div>
                    <h2 className="title">ECONOMIA DEL SIGLO XXI</h2>
                    <h2 className="title title-transparent">INFLACION</h2>
                    <h2 className="title">DATA SCIENCE Y MAS</h2>
                </div>
                <br />
                <br />
                <div id="QueEsLaEconomia" className="section">
                    <h2 className="question">¿QUE ES LA ECONOMIA?</h2>
                    <p>La <strong>economía</strong> es la ciencia social que estudia cómo se administran los recursos disponibles para satisfacer las necesidades humanas. Analiza la producción, distribución y consumo de bienes y servicios, así como las decisiones que toman individuos, empresas y gobiernos para asignar esos recursos de manera eficiente.</p> 
                    <p><strong>Se divide en dos grandes ramas: </strong> </p>
                    <ol>
                        <li><strong>Microeconomía</strong>: Estudia el comportamiento de agentes individuales, como consumidores y empresas, y cómo interactúan en los mercados.</li>
                        <li><strong>Macroeconomía</strong>: Analiza el funcionamiento global de la economía, incluyendo el crecimiento, la inflación, el desempleo y las políticas económicas de los gobiernos. </li>
                        <p>La economía es clave para entender fenómenos como la inflación, el comercio, los impuestos y el desarrollo de los países.</p>
                    </ol>
                </div>
                <br />
                <br />
                <div id="QueEsLaInflacion" className="section">
                    <h2 className="question">¿QUE ES LA INFLACIÓN?</h2>
                    <p>La inflación es el aumento generalizado y sostenido de los precios en una economía. Cuando hay inflación, el dinero pierde valor porque con la misma cantidad de dinero se pueden comprar menos bienes y servicios.</p>
                    <p>Las principales causas de la inflación incluyen el exceso de demanda (cuando muchas personas quieren comprar más de lo que se puede producir), el aumento en los costos de producción (como salarios o materias primas) y la emisión excesiva de dinero por parte del gobierno.</p>
                    <p>Si la inflación es baja y estable, puede ser positiva porque estimula la economía. Pero cuando es demasiado alta o incontrolable, genera problemas como la pérdida del poder adquisitivo, la incertidumbre económica y la reducción del ahorro. Para controlarla, los gobiernos pueden regular la cantidad de dinero en circulación o ajustar impuestos y gasto público.</p>
                </div>
                <br />
                <br />
                <div id="QueEsDtScients" className="section">
                    <h2 className="question">¿Qué es Data Science y cómo influye en la economía?</h2>
                    <p><strong>¿Qué es Data Science?</strong>  </p>
                    <p><strong>Data Scienc </strong> (Ciencia de Datos) es un campo interdisciplinario que combina matemáticas, estadísticas, programación y conocimiento de negocios para extraer información valiosa de grandes volúmenes de datos. Utiliza herramientas como inteligencia artificial, aprendizaje automático y análisis predictivo para encontrar patrones, hacer pronósticos y tomar mejores decisiones.</p> 
                    <p><strong>¿Cómo influye en la economía?</strong>  </p>
                    <p>La Ciencia de Datos tiene un impacto significativo en la economía porque permite mejorar la toma de decisiones en empresas, gobiernos y mercados financieros. Algunas de sus aplicaciones incluyen: </p> 
                    <ol>
                        <li> <strong>Optimización de mercados y precios</strong>: Ayuda a las empresas a fijar precios óptimos según la demanda y la competencia.  </li>
                        <li> <strong>Predicción de tendencias económicas</strong>: Permite anticipar crisis, inflación y crecimiento económico mediante modelos de análisis.  </li>
                        <li> <strong>Mejor eficiencia en la producción</strong>: Optimiza procesos industriales y logísticos, reduciendo costos y aumentando la productividad.  </li>
                        <li> <strong>Personalización en el consumo</strong>: Las empresas pueden ofrecer productos y servicios según los hábitos y preferencias de los consumidores.  </li>
                        <li> <strong>Detección de fraudes y riesgos financieros</strong>: Identifica patrones sospechosos en transacciones bancarias y ayuda a prevenir crisis financieras.  </li>
                    </ol>
                    <p>En general, la Ciencia de Datos mejora la eficiencia económica, reduce incertidumbres y facilita la innovación en múltiples sectores.</p>
                </div>
            </div>
        </div>
    );
}

export default BodyHomeInfo;
