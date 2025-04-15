import React, { useState, useEffect } from 'react';
/* import Pdf from '../PDF/Historia de la economía y su origen.pdf'; */
import '../style/EduDtScientsstyle.css';

/* SEMANA 1 PDF */
import PdfComoFuncionaDtScients from '../PDF/Cómo funciona el Data Science.pdf'
import PdfQueEsDtScients from '../PDF/Qué es Data Science.pdf'
import ComoImplementarDtScienst from '../PDF/Implementar data scients negocio.pdf'

/* SEMANA 2 PDF */
import QueSonDatasets from '../PDF/Que son los dataset.pdf'
import ParaQueSirvenDatasetsEnDtScients from '../PDF/Dataset en Data scients.pdf'
import DondeEncontrarDatasets from '../PDF/Datasets en internet.pdf'

/* SEMANA 3 */
import DatasetsEnExcel from '../PDF/Dataset en excel.pdf'
import QueEsUnEda from '../PDF/Que es un EDA.pdf'
import ParaQueSirvenLosEdaEnNegocios from '../PDF/EDA en negocios.pdf'






function EduDtScients() {
    const [visibleSections, setVisibleSections] = useState({
            SeccionSemana1: false,
            SeccionSemana2: false,
            SeccionSemana3: false,
            SeccionSemana4: false,
        });
    
        const toggleSection = (sections) => {
            setVisibleSections((prev) => {
                const newState = { ...prev, [sections]: !prev[sections] };
                return newState;
            });
        };
    
        useEffect(() => {
            const visibleSection = Object.keys(visibleSections).find(sections => visibleSections[sections]);
            if (visibleSection) {
                document.getElementById(visibleSection)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, [visibleSections]);
    
        return (
            <div className="containeredu">
                <video autoPlay loop muted id="background-videoDt">
                    <source src="https://i.gifer.com/4RNk.mp4" type="video/mp4" />
                </video>
                <div className="cont">
                    <h1>CIENCIA DE DATOS</h1>
                    <div className="section">
                        <p><strong>PROFESOR: BAIRON HORNA ALVAREZ</strong></p>
                        <p><strong>MODALIDAD: VIRTUAL</strong></p>
                        <p><strong>HORARIOS: OPEN</strong></p>
                        <p><strong>AULA: ADMINISTRACIÓN</strong></p>
                        <p><strong>DURACIÓN: 4 semanas</strong></p>
                    </div>
                    <br />
                    {['SeccionSemanas1', 'SeccionSemanas2', 'SeccionSemanas3', 'SeccionSemanas4'].map((sections, index) => (
                        <div key={sections} id={sections} onClick={() => toggleSection(sections)} className="sections">
                            <h2>{`SEMANA ${index + 1}`}</h2>
                            {visibleSections[sections] && (
                                <div>
                                    {index === 0 && <>
                                    <div>
                                        <p>
                                            <strong>¿Qué es Data Science?</strong><br />
                                            En la era digital, la cantidad de datos generados diariamente es inmensa. Empresas,
                                            gobiernos y organizaciones recopilan información de diversas fuentes, desde redes
                                            sociales hasta sensores industriales. Sin embargo, la recopilación de datos por sí sola
                                            no es suficiente; es necesario analizarlos y extraer conocimientos valiosos. Aquí es
                                            donde entra en juego el Data Science, o Ciencia de Datos, una disciplina que ha
                                            revolucionado la forma en que tomamos decisiones y comprendemos el mundo que
                                            nos rodea.
                                        </p>
                                    </div>
                                    <div>
                                        <p>
                                            <strong>Definición de Data Science</strong><br />
                                            Data Science es un campo interdisciplinario que combina estadística, matemáticas,
                                            programación y conocimientos específicos de diversas áreas para analizar grandes
                                            volúmenes de datos y extraer información útil. Su objetivo es descubrir patrones,
                                            predecir tendencias y proporcionar insights que faciliten la toma de decisiones
                                            fundamentadas. Esta disciplina emplea diversas herramientas y técnicas, incluyendo:
                                            • Estadística y probabilidad: Para analizar distribuciones de datos y determinar
                                            correlaciones.
                                            • Aprendizaje automático (Machine Learning): Para desarrollar modelos
                                            predictivos y clasificar información.
                                            • Big Data: Para manejar grandes volúmenes de datos en tiempo real.
                                            • Visualización de datos: Para representar los resultados de manera
                                            comprensible.
                                            • Bases de datos y almacenamiento: Para organizar y gestionar la información de
                                            manera eficiente.
                                        </p>
                                    </div>
                                    <div>
                                        <p>
                                            <strong>Historia y Evolución de Data Science</strong><br />
                                            El concepto de Data Science ha evolucionado a lo largo del tiempo. Aunque el análisis
                                            de datos ha existido desde hace siglos, su aplicación moderna se ha desarrollado en
                                            las últimas décadas gracias al avance de la tecnología.
                                            Siglo XVII-XIX: Las matemáticas y la estadística sientan las bases para el análisis de
                                            datos.
                                            Siglo XX: Con el advenimiento de las computadoras, los cálculos matemáticos se
                                            automatizan y el análisis de datos se vuelve más sofisticado.
                                            Años 2000: Con la expansión de Internet y la generación masiva de datos, surge la
                                            necesidad de nuevas herramientas para procesar la información.
                                            Actualidad: Data Science se ha convertido en una disciplina esencial en sectores
                                            como la salud, la economía, la tecnología y el marketing.
                                        </p>
                                    </div>
                                    <div>
                                        <p>
                                            <strong>¿Cómo funciona el Data Science en los negocios y para qué sirve?</strong><br />
                                            En la era digital, las empresas generan y recopilan enormes cantidades de datos
                                            provenientes de diversas fuentes, como interacciones en redes sociales,
                                            transacciones de clientes y registros de inventario. Sin embargo, la mera acumulación
                                            de datos no es suficiente; es necesario analizarlos y extraer información útil para
                                            mejorar la toma de decisiones y optimizar procesos. Aquí es donde entra en juego el
                                            Data Science, una disciplina que ha revolucionado la forma en que operan los
                                            negocios en todas las industrias.
                                        </p>
                                    </div>
                                    <div>
                                        <p>
                                            <strong>¿Qué es Data Science en los negocios?</strong>
                                            Data Science en los negocios se refiere a la aplicación de técnicas de análisis de
                                            datos, inteligencia artificial y aprendizaje automático para mejorar la eficiencia,
                                            aumentar la rentabilidad y ofrecer mejores productos y servicios
                                        </p>
                                    </div>
                                    <div>
                                        <p>
                                            <strong>¿Cómo implementar Data Science en tu negocio?</strong><br />
                                            En un mundo cada vez más impulsado por los datos, el Data Science se ha convertido
                                            en una herramienta esencial para mejorar la toma de decisiones y optimizar los
                                            procesos empresariales. Su implementación en los negocios permite descubrir
                                            patrones, predecir tendencias y generar ventajas competitivas. Sin embargo, muchas
                                            empresas desconocen cómo empezar a integrar Data Science en su estructura. Este
                                            documento ofrece una guía detallada sobre cómo hacerlo de manera efectiva.
                                        </p>
                                        <p>
                                            Implementar Data Science en un negocio es un proceso que requiere planificación,
                                            inversión y adaptación cultural. Sin embargo, los beneficios superan ampliamente los
                                            desafíos, ya que permite optimizar operaciones, mejorar la relación con los clientes y
                                            tomar decisiones fundamentadas en datos. A medida que la tecnología avanza, la
                                            adopción de Data Science será clave para el crecimiento y la competitividad en el
                                            mercado empresarial.
                                        </p>
                                    </div>
                                    <div>
                                        <p><strong>NEGOCIOS QUE IMPLEMENTAN DATA SCIENTS</strong></p>
                                        <p><strong>VS</strong></p>
                                        <p><strong>NEGOCIOS QUE NO IMPLEMENTAN DATA SCIENTS</strong></p>
                                        <iframe 
                                            src="http://127.0.0.1:5000/grafico_rentabilidad_data_science.html"
                                            width="100%" 
                                            height="600px" 
                                            style={{ border: 'none' }}  // El estilo debe ser un objeto
                                        />


                                    </div>
                                    <div>
                                        <p>

                                        </p>
                                    </div>
                                        <h3>MATERIAL DE APOYO</h3>
                                        <p>DOCUMENTAION COMPLETA DE LA SEMANA EN PDF</p>
                                        <div className = "App">
                                            <a href = {PdfQueEsDtScients} target = "_blank">Que es el Data scients</a>
                                        </div>
                                        
                                        <div className = "App">
                                            <a href = {PdfComoFuncionaDtScients} target = "_blank">Como funciona el data scients?</a>
                                        </div>
                                        <div className = "App">
                                            <a href = {ComoImplementarDtScienst} target = "_blank">Como implementar data scients en los negocios?</a>
                                        </div>
                                    </>}
                                    {index === 1 && <>
                                    <div>
                                        <p>
                                            <strong>¿Qué son los Datasets?</strong><br />
                                            En la era digital, el manejo de datos se ha convertido en un pilar fundamental para la toma
                                            de decisiones en diferentes sectores. Dentro de este contexto, los datasets juegan un papel
                                            crucial, ya que constituyen la base para el análisis y la aplicación de técnicas de Data
                                            Science, inteligencia artificial y aprendizaje automático. Este documento explora qué es un
                                            dataset, sus características principales, su importancia y sus aplicaciones en diversas
                                            industrias.
                                        </p>
                                    </div>
                                    <div>
                                        <p>
                                            <strong>Importancia de los Datasets en Data Science</strong><br />
                                            Los datasets permiten estructurar la información y extraer patrones y tendencias útiles para
                                            diversos propósitos. Entre sus funciones principales en Data Science se encuentran: <br />
                                            <br />
                                        </p>
                                        <p>
                                        <strong>1. Entrenamiento de Modelos de Machine Learning</strong><br />
                                            o Los modelos de inteligencia artificial necesitan datos para aprender. A
                                            partir de datasets etiquetados, los algoritmos pueden identificar
                                            patrones y mejorar su precisión con el tiempo.
                                            o Ejemplo: Un dataset de imágenes de células cancerosas ayuda a
                                            entrenar un modelo de detección de cáncer.
                                        </p>
                                        <p>
                                        <strong>2. Análisis Exploratorio de Datos (EDA)</strong><br />
                                            o Antes de construir modelos, es necesario comprender la estructura de
                                            los datos, detectar anomalías y visualizar tendencias.
                                            o Ejemplo: Un dataset de ventas permite analizar qué productos tienen
                                            mejor desempeño en diferentes temporadas.
                                        </p>
                                        <p>
                                        <strong>3. Toma de Decisiones Basadas en Datos</strong><br />
                                            o Los datasets permiten que las organizaciones y empresas basen sus
                                            decisiones en evidencia, en lugar de suposiciones.
                                            o Ejemplo: Una compañía puede analizar datos de clientes para ajustar
                                            sus estrategias de marketing y mejorar la retención.
                                        </p>
                                    </div>
                                    <div>
                                        <p>
                                            <strong>Plataformas de Datasets Gratuitos</strong><br />
                                            A continuación, se presentan algunos de los sitios más populares donde se pueden encontrar
                                            datasets abiertos:
                                        </p>
                                        <p>
                                            Kaggle (https://www.kaggle.com/datasets) <br />
                                            <br />
                                            o Kaggle es una plataforma ampliamente utilizada en la comunidad de
                                            Data Science que ofrece una gran variedad de datasets en diversas
                                            categorías.
                                            o Incluye datos sobre finanzas, salud, tecnología, redes sociales y más.
                                            o Permite la 
                                        </p>
                                        <p>
                                            Google Dataset Search (https://datasetsearch.research.google.com/) <br />
                                            <br />
                                            o Es un motor de búsqueda especializado en datasets públicos.
                                            o Permite encontrar conjuntos de datos publicados en instituciones
                                            académicas, gubernamentales y organizaciones sin fines de lucro.
                                            o Filtra por tipo de formato y origen de los datos.
                                        </p>
                                        <p>
                                            World Bank Open Data (https://data.worldbank.org/) <br />
                                            o Datasets proporcionados por el Banco Mundial sobre economía,
                                            demografía y desarrollo global.
                                            o Se pueden descarg
                                        </p>
                                    </div>
                                    <div>
                                    <div>
                                    <iframe 
                                            src="http://127.0.0.1:5000/grafico_columna_top3_sitios_datase.html"
                                            width="100%" 
                                            height="600px" 
                                            style={{ border: 'none' }}  // El estilo debe ser un objeto
                                    />
                                    </div>
                                    </div>
                                        <h3>MATERIAL DE APOYO</h3>
                                        <p>DOCUMENTAION COMPLETA DE LA SEMANA EN PDF</p>
                                        <div className = "App">
                                            <a href = {QueSonDatasets} target = "_blank">que son los datasets</a>
                                        </div>
                                        
                                        <div className = "App">
                                            <a href = {ParaQueSirvenDatasetsEnDtScients} target = "_blank">Para que sirven los datasets en data scients?</a>
                                        </div>
                                        <div className = "App">
                                            <a href = {DondeEncontrarDatasets} target = "_blank">Donde encontrar datasets en internet</a>
                                        </div>
                                    </>}
                                    {index === 2 && <>
                                    <div>
                                        <p>
                                            <strong>¿Cómo hacer mi propio Dataset en Excel?</strong><br />
                                            Crear tu propio dataset en Excel es un proceso sencillo que te permitirá organizar, analizar
                                            y visualizar datos de manera estructurada. A menudo, Excel se utiliza para la recolección de
                                            datos debido a su accesibilidad, facilidad de uso y herramientas de análisis integradas. Este
                                            documento explica cómo crear un dataset personalizado en Excel paso a paso, desde la
                                            recopilación de datos hasta la organización y limpieza.
                                        </p>
                                    </div>
                                    <div>
                                        <p>
                                            <strong>Definir el Propósito del Dataset</strong><br />
                                            Antes de comenzar a trabajar en Excel, es importante definir claramente el propósito de tu
                                            dataset. Pregúntate: <br />
                                            • ¿Qué tipo de datos necesito? (números, texto, fechas, etc.) <br />
                                            • ¿Cuál es el objetivo de analizar estos datos? (predecir tendencias, analizar
                                            comportamiento, etc.) <br />
                                            • ¿Cómo organizaré los datos? (por categorías, variables, etc.)
                                        </p>
                                    </div>
                                    <div>
                                        <p>
                                            <strong>Crear una Nueva Hoja de Cálculo</strong> <br />
                                            Abre Excel y crea un nuevo archivo en blanco. La estructura de un dataset generalmente
                                            incluye las siguientes características: <br />
                                            • Filas: Cada fila representa una instancia o registro (por ejemplo, una
                                            transacción, una persona, un producto). <br />
                                            • Columnas: Cada columna representa una variable o atributo relacionado con
                                            los registros (por ejemplo, edad, fecha de compra, nombre del producto).
                                        </p>
                                    </div>
                                    <div>
                                        <p>
                                            <strong>Ingresar las Variables y Atributos</strong><br />
                                            En la primera fila de tu hoja de cálculo, asigna los encabezados de columna que describen
                                            las variables o atributos que deseas capturar. Asegúrate de que cada encabezado sea claro y
                                            representativo del dato que almacenará. Algunos ejemplos comunes incluyen: <br />
                                            • ID: Un identificador único para cada registro. <br />
                                            • Fecha: La fecha en que se recoge o genera el dato. <br />
                                            • Categoría: Una categoría o clasificación relacionada con el dato (por ejemplo,
                                            tipo de producto, sector de negocio).
                                        </p>
                                    </div>
                                    <div>
                                        <p>
                                            <strong>Ingresar los Datos</strong> <br />
                                            Comienza a ingresar los datos en las filas correspondientes bajo cada encabezado. Es
                                            importante ser consistente y preciso al ingresar los datos:
                                            • Evita valores nulos o vacíos en los campos que son importantes para el
                                            análisis. <br />
                                            • Usa formatos consistentes (por ejemplo, formato de fecha, número de
                                            teléfono, dirección, etc.).
                                        </p>
                                    </div>
                                        <h3>MATERIAL DE APOYO</h3>
                                        <p>DOCUMENTAION COMPLETA DE LA SEMANA EN PDF</p>
                                        <div className = "App">
                                            <a href = {DatasetsEnExcel} target = "_blank">Crear datasets en excel</a>
                                        </div>
                                        
                                        <div className = "App">
                                            <a href = {QueEsUnEda} target = "_blank">Ques es un EDA?</a>
                                        </div>
                                        <div className = "App">
                                            <a href = {ParaQueSirvenLosEdaEnNegocios} target = "_blank">Para que sirven los EDA en los negocios</a>
                                        </div>
                                    </>}
                                    {index === 3 && <>
                                        <p>Crea una EDA con el siguiente dataset</p>
                                        <a href="https://www.kaggle.com/datasets/shantanugarg274/lung-cancer-prediction-dataset">Dataset</a>
                                        <p>Implementa la siguiente plantilla EDA y adaptala a tu datasets</p>
                                        <a href="https://colab.research.google.com/drive/1vyvYRtmloAGKhMEfFrxQ_zpjqfdPyk-7">Plantilla EDA</a>
                                    </>}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        );
    }

export default EduDtScients;
