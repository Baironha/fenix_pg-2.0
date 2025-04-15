import React, { useState, useEffect } from 'react';
import '../style/EduDtScientsstyle.css';

// Documentación en PDF de los cursos de Fenix
import PdfHistoriaEco from '../PDF/Historia de la economía y su origen.pdf';
import PdfImpotanciaEco from '../PDF/La Importancia de entender la economía.pdf';
import PdfQueEsLaEco from '../PDF/Que es la economía y su función.pdf';
import PdfQueEsInflacion from '../PDF/Que es y como surgió la inflación.pdf';
import PdfDesarolloInflacion from '../PDF/Desarrollo de la inflación.pdf';
import PdfPaisesAfectaInflacion from '../PDF/Como nos afecta la inflación.pdf';
import PdfComoNosAfectaLaInflacion from '../PDF/Como nos afecta la inflación.pdf';
import PdfEvadirInflacion from '../PDF/Se podra evadir la inflación.pdf';
import PdfComoEmprender from '../PDF/como emprender en el siglo XXI.pdf';
import PdfPaisesEmprender from '../PDF/paises para emprender.pdf';
import PdfDesarrollarHabilidades from '../PDF/Desarrollar habilidades para emprender.pdf';
import PdfMercadosEmergentes from '../PDF/mercados emergentes.pdf';
import '../style/EduEco.css';

function EduInflacionEconomia() {
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
    const visibleSection = Object.keys(visibleSections).find(
      (sections) => visibleSections[sections]
    );
    if (visibleSection) {
      document
        .getElementById(visibleSection)
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
            <p>
                <strong>PROFESOR: BAIRON HORNA ALVAREZ</strong>
            </p>
            <p>
                <strong>MODALIDAD: VIRTUAL</strong>
            </p>
            <p>
                <strong>HORARIOS: OPEN</strong>
            </p>
            <p>
                <strong>AULA: ADMINISTRACIÓN</strong>
            </p>
            <p>
                <strong>DURACIÓN: 4 semanas</strong>
            </p>
            </div>
            <br />
            {['SeccionSemana1', 'SeccionSemana2', 'SeccionSemana3', 'SeccionSemana4'].map(
            (sections, index) => (
                <div
                key={sections}
                onClick={() => toggleSection(sections)}
                className="sections"
                >
                <h2>{`SEMANA ${index + 1}`}</h2>
                {visibleSections[sections] && (
                    <div>
                    {index === 0 && (
                        <>
                        <div>
                                <div>
                                    <h3 id='Material'>Que es la economia en la actualidad? </h3>
                                    <div id='Seccion'>
                                        <p id='Contenido'>
                                            <strong>¿Qué es la Economía?</strong> <br />
                                            La economía es la ciencia que estudia cómo las sociedades administran sus recursos
                                            para satisfacer sus necesidades y deseos. Analiza la producción, distribución y
                                            consumo de bienes y servicios, así como las decisiones que toman los individuos,
                                            empresas y gobiernos para utilizar sus recursos de manera eficiente.
                                        </p>
                                    </div>
                                    <br />
                                    <div id='Seccion'>
                                            <strong>En términos simples, la economía busca responder preguntas como:</strong><br />
                                            <ol>
                                                <li>¿Qué producir? (¿Qué bienes y servicios son necesarios o deseados?)</li>
                                                <li>¿Cómo producirlo? (¿Qué métodos y recursos se deben emplear?)</li>
                                                <li>¿Para quién producir? (¿Quiénes recibirán los bienes y servicios y en qué cantidad?)</li>
                                            </ol>
                                        
                                    </div>
                                    <div id='Seccion'>
                                        <h3>Principales Conceptos de la Economía</h3>
                                        <p id='Contenido'>
                                            <strong>Recursos y Escasez</strong> <br />
                                            Los recursos (como el dinero, la tierra, el trabajo y la tecnología) son limitados, pero
                                            las necesidades humanas son prácticamente infinitas. La economía estudia cómo se
                                            pueden asignar estos recursos de la mejor manera posible.
                                        </p>
                                        <p id='Contenido'>
                                            <strong>Oferta y Demanda</strong><br />
                                            La oferta es la cantidad de bienes y servicios que los productores están dispuestos a
                                            vender, mientras que la demanda es lo que los consumidores están dispuestos a
                                            comprar. La interacción entre ambos determina los precios en un mercado.
                                        </p>
                                    </div>
                                </div>
                                <br />
                                <div>
                                    <h3 id='Material'>Historia de la economia:</h3>
                                    <div id='Seccion'>
                                        <p id='Contenido'>
                                            <strong>Historia de la Economía y su Origen:</strong><br />
                                            La economía ha existido desde los albores de la humanidad como una necesidad
                                            fundamental para la supervivencia y la organización de las sociedades. Su historia es
                                            un reflejo del desarrollo humano, desde el trueque en comunidades primitivas hasta
                                            los complejos sistemas económicos modernos.
                                        </p>
                                    </div>
                                    <div id='Seccion'>
                                        <p id='Contenido'>
                                        <strong>El Origen de la Economía y la Subsistencia al Trueque:</strong><br />
                                            Antes de que existiera la economía como disciplina formal, los primeros grupos
                                            humanos vivían en comunidades de cazadores-recolectores, donde los bienes se
                                            compartían de manera colectiva. La administración de los recursos estaba basada en
                                            la cooperación y el trabajo en equipo para garantizar la supervivencia.
                                        </p>
                                        <p id='Contenido'>
                                            Con la invención de la agricultura hace unos 10,000 años, las sociedades
                                            comenzaron a asentarse en comunidades estables, lo que permitió la producción de
                                            excedentes de alimentos. Este cambio marcó el inicio de una economía más
                                            organizada, ya que los excedentes podían intercambiarse por otros bienes. Así surgió
                                            el trueque, una de las primeras formas de intercambio económico. Sin embargo, el
                                            trueque tenía limitaciones, ya que requería que ambas partes quisieran exactamente
                                            lo que la otra ofrecía.
                                        </p>
                                    </div>
                                    <div id='Seccion'>
                                        <p id='Contenido'>
                                            <strong>Las Primeras Civilizaciones y la Economía Organizada:</strong><br />
                                            A medida que las sociedades crecían y se volvían más complejas, se desarrollaron
                                            sistemas económicos más avanzados. En Mesopotamia, Egipto, India y China, los
                                            gobiernos comenzaron a administrar los recursos y a registrar transacciones
                                            mediante sistemas de escritura
                                        </p>
                                    </div>
                                    <div id='Seccion'>
                                        <p id='Contenido'>
                                            <strong>El Mercantilismo y la Expansión Comercial</strong><br />
                                            Con los descubrimientos geográficos de los siglos XV y XVI, las economías europeas
                                            comenzaron a transformarse con la acumulación de metales preciosos y la
                                            expansión colonial. El mercantilismo se convirtió en la doctrina económica
                                            dominante, promoviendo el control estatal del comercio y la autosuficiencia de los
                                            países
                                        </p>
                                    </div>
                                    <div id='Seccion'>
                                        <p id='Contenido'>
                                            <strong>El Siglo XX: Keynesianismo, Neoliberalismo y Globalización</strong><br />
                                            Tras la Gran Depresión de 1929, el economista John Maynard Keynes propuso que el
                                            Estado debía intervenir en la economía para evitar crisis y desempleo. Sus ideas
                                            dieron lugar al Estado de bienestar, donde los gobiernos regulaban los mercados y
                                            promovían el crecimiento económico.
                                        </p >
                                    </div>
                                </div><br />
                                <div>
                                    <h3 id='Material'>La importancia de la economia:</h3>
                                    <div id='Seccion'>
                                        <p id='Contenido'>
                                            <strong>La Importancia de Entender la Economía y su Función en el Mundo:</strong><br />
                                            La economía es una ciencia fundamental que influye en todos los aspectos de la vida
                                            humana. Su comprensión no solo permite a los individuos tomar mejores decisiones
                                            financieras, sino que también ayuda a las sociedades a organizarse de manera más
                                            eficiente para garantizar el bienestar general. Desde la producción y distribución de
                                            bienes hasta la creación de empleo y el desarrollo de los países, la economía es el
                                            motor que impulsa la vida moderna y determina la calidad de vida de las personas
                                        </p>
                                    </div>
                                    <div  id='Seccion'>
                                        <p id='Contenido'>
                                            <strong>¿Por qué es importante entender la economía?</strong><br />
                                            Comprender la economía es esencial porque afecta directamente la vida cotidiana de
                                            las personas, la estabilidad de los países y el progreso de la humanidad. En un
                                            mundo globalizado donde las decisiones económicas de un país pueden afectar a
                                            toda la comunidad internacional, tener conocimientos económicos es crucial para
                                            adaptarse a los cambios y aprovechar las oportunidades que surgen.
                                        </p>
                                        <p id='Contenido'>
                                            Uno de los principales beneficios de entender la economía es que nos permite
                                            mejorar nuestra toma de decisiones personales. La administración del dinero, la
                                            inversión y el ahorro son aspectos fundamentales de la vida diaria que están
                                            directamente influenciados por principios económicos. Saber cómo funcionan la
                                            inflación, las tasas de interés y los ciclos económicos ayuda a tomar mejores
                                            decisiones en relación con nuestros ingresos y gastos, evitando deudas innecesarias
                                            y asegurando un futuro financiero más estable.
                                        </p>
                                        <p id='Contenido'>
                                            Además, conocer cómo opera la economía nos permite entender el mundo que nos
                                            rodea. Muchos de los eventos que afectan a la sociedad, como las crisis
                                            económicas, la subida de precios de los alimentos y el desempleo, tienen
                                            explicaciones económicas que, si se comprenden adecuadamente, pueden ayudar a
                                            las personas a prepararse mejor para afrontar estos desafíos. La economía también
                                            explica por qué algunos países son más ricos que otros y qué medidas pueden tomar
                                            para mejorar su desarrollo.
                                        </p>
                                        <p id='Contenido'>
                                            En el ámbito empresarial, el conocimiento económico es una herramienta clave para
                                            tomar decisiones estratégicas. Las empresas dependen de la economía para evaluar
                                            la viabilidad de sus negocios, decidir precios, gestionar costos y anticipar la demanda
                                            del mercado. Comprender las tendencias económicas permite a las compañías
                                            innovar y adaptarse a los cambios, lo que aumenta sus posibilidades de éxito en un
                                            entorno competitivo.
                                        </p>
                                    </div >
                                    <div id='Seccion'>
                                        <p id='Contenido'>
                                            <strong>¿Para qué sirve la existencia de la economía en el mundo?</strong><br />
                                            La economía existe porque los recursos en el mundo son limitados y la sociedad
                                            necesita encontrar la mejor manera de utilizarlos para satisfacer sus necesidades.
                                            Sin ella, no habría un sistema organizado para administrar la producción y
                                            distribución de bienes y servicios, lo que llevaría al caos y a la ineficiencia en el uso
                                            de los recursos. Su función principal es garantizar que estos recursos se asignen de
                                            manera óptima para mejorar la calidad de vida de las personas y fomentar el
                                            desarrollo sostenible.
                                        </p>
                                        <p id='Contenido'>
                                            Uno de los principales propósitos de la economía es la optimización de los recursos
                                            disponibles. En un mundo donde la población crece constantemente y las
                                            necesidades aumentan, es fundamental que los bienes y servicios se produzcan y
                                            distribuyan de la manera más eficiente posible. La economía permite identificar qué
                                            recursos son escasos, cómo deben usarse y qué alternativas pueden adoptarse para
                                            aprovecharlos mejor.
                                        </p>
                                    </div>
                                </div>
                                <br />
                                <div>
                                    <h3>MATERIAL DE APOYO</h3>
                                    <p>DOCUMENTACION COMPLETA DE LA SEMANA EN PDF</p>
                                    <div className = "App">
                                        <a href = {PdfHistoriaEco} target = "_blank">La historia de la Ecoomia</a>
                                    </div>
                                    <div className = "App">
                                        <a href = {PdfQueEsLaEco} target = "_blank">Que es la economia y como surgio?</a>
                                    </div>
                                    <div className = "App">
                                        <a href = {PdfImpotanciaEco} target = "_blank">importancia de la economia</a>
                                    </div>
                                    <div>
                                    <iframe
                                        width="560"
                                        height="315"
                                        src="https://www.youtube.com/embed/Iu9Cy8CAKEg?si=YavmGMlq26z0ls1u"
                                        title="YouTube video player"
                                        frameBorder="0" // Cambiado de "frameborder" a "frameBorder"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin" // Cambiado de "referrerpolicy" a "referrerPolicy"
                                        allowFullScreen // Cambiado de "allowfullscreen" a "allowFullScreen"
                                    ></iframe>

                                    </div>
                                </div>
                            </div>
                        <div className="App">
                            {/* <a className="pdf-link" href={Pdf} target="_blank" rel="noopener noreferrer">Download Pdf</a> */}
                        </div>
                        </>
                    )}
                    {index === 1 && (
                        <>
                        
                        <div id='Seccion'>
                    <p id='Contenido'>
                        <strong>¿Qué es la Inflación?</strong><br />
                        La inflación es el aumento sostenido y generalizado de los precios de bienes y servicios en una economía durante un período de tiempo. Cuando hay inflación, el poder adquisitivo del dinero disminuye, es decir, con la misma cantidad de dinero se pueden comprar menos cosas. 
                    </p>
                </div>
                <br />
                <div id='Seccion'>
                    <p id='Contenido'>
                        <strong>Origen de la inflación</strong><br />
                        La inflación ha existido desde que las sociedades comenzaron a utilizar dinero como medio de intercambio. En la historia, se ha presentado en diferentes formas: 
                    </p>
                </div>
                <div id='Seccion'>
                    <p id='Contenido'>
                        La inflación afecta a los pequeños negocios principalmente aumentando sus costos de producción y reduciendo el poder adquisitivo de los consumidores. A medida que suben los precios de los insumos, como materiales y energía, las empresas deben enfrentar mayores costos, lo que puede dificultar mantener precios competitivos. Al mismo tiempo, los consumidores tienen menos dinero disponible para gastar, lo que reduce la demanda de productos o servicios. Esto puede llevar a los pequeños negocios a ajustar precios, recortar márgenes de ganancia o enfrentarse a la difícil decisión de perder clientes o absorber los costos adicionales.
                    </p>
                </div>
                <div>
                    <div id='Seccion'>
                        <p id='Contenido'>
                            <strong>Cómo nos afecta la inflación:</strong><br />
                            La inflación afecta a las personas de diversas maneras, principalmente reduciendo el poder adquisitivo del dinero y generando inestabilidad económica. Algunas de las principales consecuencias son:
                        </p>

                        <ol>
                            <li>
                                <strong>Pérdida de poder adquisitivo:</strong><br />
                                Cuando los precios suben y los salarios no aumentan al mismo ritmo, las personas pueden comprar menos con el mismo ingreso. Esto afecta especialmente a quienes tienen ingresos fijos, como jubilados o empleados con sueldos no ajustados a la inflación.
                            </li>
                            <br />
                            <li>
                                <strong>Aumento en el costo de vida:</strong><br />
                                Los productos básicos, como alimentos, transporte, vivienda y servicios, se encarecen, lo que obliga a las familias a destinar más dinero a necesidades esenciales y reducir gastos en ocio, educación o ahorro.
                            </li>
                            <li>
                                <strong>Tasas de interés más altas:</strong> <br />
                                Para frenar la inflación, los bancos centrales suelen aumentar las tasas de interés. Esto hace que los préstamos, como hipotecas o créditos personales, sean más caros, afectando a quienes dependen del financiamiento.
                            </li>
                        </ol>
                    </div>
                    <div id='Seccion'>
                        <h2>Evolución histórica de la inflación</h2>
                        
                    </div>
                    <div id='Seccion'>
                        <p id='Contenido'>
                            <strong>- Décadas de 1980 y 1990:</strong><br />
                            Muchos países, especialmente en América Latina, enfrentaron altas tasas de inflación e incluso hiperinflación debido a políticas fiscales y monetarias expansivas.
                        </p>
                    </div>
                    <div id='Seccion'>
                        <p id='Contenido'>
                            <strong>Finales de la década de 1990 y principios de 2000:</strong><br />
                            La adopción de políticas monetarias más estrictas y la globalización contribuyeron a una disminución general de la inflación a nivel mundial.
                        </p>
                    </div>
                    <div id='Seccion'>
                        <p id='Contenido'>
                            <strong>Crisis financiera de 2008:</strong><br />
                            Aunque la crisis provocó una recesión global, la inflación se mantuvo relativamente contenida debido a la disminución de la demanda agregada.
                        </p>
                    </div>
                    <div id='Seccion'>
                        <p id='Contenido'>
                            <strong>Pandemia de COVID-19 (2020-2022):</strong><br />
                            Las interrupciones en las cadenas de suministro y las políticas fiscales expansivas llevaron a un repunte de la inflación en muchos países.
                        </p>
                    </div>
                    <div id='Seccion'>
                        <p id='Contenido'>
                            <strong>Años recientes (2023-2025):</strong><br />
                            Según el Fondo Monetario Internacional, la inflación mundial alcanzó un pico cercano al 9% a finales de 2022. A finales de 2024, la inflación se había reducido aproximadamente a la mitad, situándose por debajo del 5%, al normalizarse tanto las cadenas de suministro como la demanda de los consumidores.
                        </p>
                    </div>
                    <div>
                    <iframe
                        key={new Date().getTime()}  // Esto fuerza la recarga del iframe
                        src="http://127.0.0.1:5000/Evolución_de_la_Inflación_Mundial.html"
                        width="100%"
                        height="500px"
                        title="Gráfico de Visitas"
                        frameBorder="0"
                        referrerPolicy="no-referrer"
                        allowFullScreen
                    ></iframe>

                    </div>

                    <div id='Seccion'>
                        <p id='Contenido'>
                            <strong>Media de la inflación mundial</strong><br />
                            El Fondo Monetario Internacional proyecta que la inflación general disminuya, situándose por debajo del 5% en 2024, tras haber alcanzado un máximo del 9,4% interanual en el tercer trimestre de 2022.
                        </p>
                    </div>
                    <div id='Seccion'>
                        <p id='Contenido'>
                            <strong>Gráfico de los países más afectados y menos afectados por la inflación</strong><br />
                            Algunos países han experimentado tasas de inflación significativamente altas en los últimos años:
                        </p>
                    </div>
                    <div>
                        <iframe
                            src="http://127.0.0.1:5000/Inflaci%C3%B3n_Promedio_por_Pa%C3%ADs.html"
                            width="100%"
                            height="500px"
                            title="Gráfico de Visitas"
                            frameBorder="0"
                        ></iframe>
                    </div>
                    <div id='Seccion'>
                        <p id='Contenido'>
                            Es importante destacar que, aunque la tendencia global muestra una desaceleración de la inflación, persisten riesgos como tensiones geopolíticas y conflictos comerciales que podrían influir en las perspectivas económicas futuras. Para una visión más detallada sobre los países con menor inflación en América Latina en 2024, puedes consultar el siguiente video:
                        </p>
                    </div>
                    </div>
                    <h3>MATERIAL DE APOYO</h3>
                    <p>DOCUMENTACIÓN COMPLETA DE LA SEMANA EN PDF</p>
                    <div className="App">
                        <a href={PdfQueEsInflacion} target="_blank">¿Qué es la inflación?</a>
                    </div>
                    <div className="App">
                        <a href={PdfComoNosAfectaLaInflacion} target="_blank">¿Cómo nos afecta la inflación?</a>
                    </div>
                    <div className="App">
                        <a href={PdfDesarolloInflacion} target="_blank">Desarrollo de la inflación</a>
                    </div>
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/TOVvFXR3jA8?si=wbbpIotDbD073Jsb"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                        </>
                    )}
                    {index === 2 && (
                        <>
                        
                        <div id='Seccion'>
                            <p id='Contenido'>
                                <strong>Se puede evadir la inflación?</strong><br />
                                Evadir completamente la inflación es prácticamente imposible, ya que forma parte
                                del ciclo económico global. Sin embargo, existen estrategias para mitigar sus efectos
                                y proteger el poder adquisitivo en el siglo XXI.
                            </p>
                        </div>
                        <div>
                            <iframe
                                src="http://127.0.0.1:5000/Distribucion_Inflacion_Mundial_Promedio.html"
                                width="100%"
                                height="500px"
                                title="Distribución de la Inflación Mundial Promedio"
                                frameBorder="0"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div id='Seccion'>
                            <p id='Contenido'>
                                <strong>1. Invertir en Activos Resistentes a la Inflación</strong><br />
                                En épocas de inflación, el valor del dinero en efectivo disminuye con el tiempo. Para
                                evitar esta pérdida, se recomienda invertir en activos que mantengan o aumenten su
                                valor, como: <br />
                                <br />
                                <strong>Bienes raíces:</strong> Históricamente, las propiedades tienden a valorizarse con la inflación.
                                <br />
                                <strong>Metales preciosos:</strong> Oro y plata son refugios de valor en tiempos de incertidumbre
                            </p>
                        </div>
                        <div id='Seccion'>
                            <p id='Contenido'>
                                <strong>Bolsa de valores:</strong>
                                Acciones de empresas con alta demanda, fondos indexados y ETFs pueden ayudar a
                                superar la inflación. <br />
                                <br />
                                <strong>Criptomonedas:</strong>
                                Aunque volátiles, algunas como Bitcoin han sido consideradas un refugio contra la
                                devaluación de las monedas.
                            </p>
                        </div>
                        <div id='Seccion'>
                            <p id='Contenido'>
                                <strong>2. Diversificar Ingresos y Proteger el Poder Adquisitivos</strong><br />
                                Depender de una única fuente de ingresos puede ser riesgoso en tiempos de
                                inflación. Algunas formas de diversificación incluyen: <br />
                                <br />
                                <strong>Emprendimientos digitales:</strong><br />
                                Negocios en línea, comercio electrónico y servicios
                                remotos permiten generar ingresos adicionales.
                                <br />
                                <strong>Inversiones pasivas:</strong><br />
                                Dividendos, bonos ajustados a la inflación y otros activos
                                <br />
                                <strong>financieros pueden proporcionar estabilidad.</strong><br />
                                Educación y mejora de habilidades: Asegurar un crecimiento profesional con
                                habilidades demandadas aumenta la posibilidad de obtener mejores ingresos
                            </p>
                        </div>
                        <div id='Seccion'>
                            <p id='Contenido'>
                                <strong>3. Reducir Deudas con Tasas Variables</strong><br />
                                Las tasas de interés suelen aumentar para controlar la inflación, encareciendo los
                                <br />
                                <strong>créditos. Para evitar problemas financieros:</strong><br />
                                Prioriza pagar deudas con intereses altos y variables.
                                <br />
                                Refinancia préstamos en momentos de tasas bajas.
                                <br />
                                Evita adquirir nuevas deudas innecesarias.
                            </p>
                        </div>
                        <div id='Seccion'>
                            <p id='Contenido'>
                                <strong>4. Optimizar el Gasto y Aumentar el Ahorro Inteligente</strong><br />
                                <strong>El aumento en el costo de vida requiere ajustes en la administración financiera:</strong> <br />                                    <br />
                                <strong>Presupuesto ajustado:</strong> <br />
                                Identifica gastos esenciales y reduce compras innecesarias.
                                <br />
                                <strong>Compras estratégicas:</strong> <br />
                                Aprovecha ofertas, descuentos y compra al por mayor en
                                productos de primera necesidad.
                                <br />
                                <strong>Ahorro en activos reales:</strong> <br />
                                En lugar de guardar dinero en efectivo, considera opciones
                                que generen valor con el tiempo.
                            </p>
                        </div>
                        <div id='Seccion'>
                            <p id='Contenido'>
                                <strong>Conclusión</strong><br />
                                Si bien la inflación es un reto inevitable, existen múltiples estrategias para reducir su
                                impacto. Invertir en activos sólidos, diversificar ingresos, gestionar deudas y
                                optimizar el gasto son claves para protegerse en la economía del siglo XXI. La clave
                                está en la educación financiera, la adaptación al entorno digital y la toma de
                                decisiones estratégicas.
                            </p>
                        </div>
                            <h3>MATERIAL DE APOYO</h3>
                            <p>DOCUMENTAION COMPLETA DE LA SEMANA EN PDF</p>
                            <div className = "App">
                                <a href = {PdfPaisesAfectaInflacion} target = "_blank">Los paises afectados por la inflacion</a>
                            </div>
                            
                            <div className = "App">
                                <a href = {PdfEvadirInflacion} target = "_blank">LSe puede evadir la inflacion?</a>
                            </div>
                            <div className = "App">
                                <a href = {PdfComoEmprender} target = "_blank">Como emprender en el siglo XXI</a>
                            </div>
                            <br />
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/YOI7bGSPG7g?si=RGsYzEdc6f4WA2zR"
                                title="YouTube video player"
                                frameBorder="0" // Cambiado de "frameborder" a "frameBorder"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin" // Cambiado de "referrerpolicy" a "referrerPolicy"
                                allowFullScreen // Cambiado de "allowfullscreen" a "allowFullScreen"
                            ></iframe>
                        </>
                    )}
                    {index === 3 && (
                        <>
                            <div id='Seccion'>
                                <p id='Contenido'>
                                    <strong>Los mejores países para emprender</strong><br />
                                    Los mejores países para emprender suelen ofrecer un entorno favorable en
                                    términos de facilidad para hacer negocios, acceso a financiamiento, estabilidad
                                    económica y regulaciones favorables. Según diferentes índices, estos son algunos
                                    de los mejores países para emprender y las razones detrás de su éxito:
                                </p>
                            </div>
                            <div>
                            <iframe
                                src="http://127.0.0.1:5000/Prediccion_vs_Valores_Reales.html"
                                width="100%"
                                height="500px"
                                title="Predicción vs Valores Reales"
                                frameBorder="0"
                                allowFullScreen
                            ></iframe>

                            </div>
                            <div id='Seccion'>
                                <p id='Contenido'>
                                    <strong>1. Estados Unidos</strong><br />
                                    - Razón: Es la cuna de Silicon Valley y un referente mundial en innovación y
                                    emprendimiento. Tiene un ecosistema robusto con inversores de capital de riesgo,
                                    acceso a talento altamente capacitado y un marco legal que protege la propiedad
                                    intelectual.
                                    - Ventajas: Amplio mercado, facilidad para levantar capital, cultura proemprendimiento. 
                                </p>
                            </div >
                            <div id='Seccion'>
                                <p id='Contenido'>
                                    <strong>2. Singapur</strong><br />
                                    - Razón: Tiene una economía estable, bajos impuestos corporativos y una
                                    burocracia mínima para iniciar un negocio. Además, es un hub financiero y
                                    tecnológico en Asia.
                                    - Ventajas: Regulaciones claras, impuestos bajos, ubicación estratégica en Asia. 
                                </p>
                            </div>
                            <div id='Seccion'>
                                <p id='Contenido'>
                                    <strong>3. Suiza</strong><br />
                                    - Razón: Es uno de los países más innovadores, con un fuerte sistema bancario y
                                    un entorno económico estable. Es ideal para startups tecnológicas y de
                                    biotecnología.
                                    - Ventajas: Seguridad financiera, alto nivel educativo, incentivos para la
                                    investigación. 
                                </p>
                            </div>
                            <h3>MATERIAL DE APOYO</h3>
                            <p>DOCUMENTACION COMPLETA EN PDF DE LA SEMANA</p>
                            <div className = "App">
                                <a href = {PdfPaisesEmprender} target = "_blank">Los mejores paises para emprender</a>
                            </div>
                            <div className = "App">
                                <a href = {PdfDesarrollarHabilidades} target = "_blank">Desarrollar habilidades para emprender</a>
                            </div>
                            <div className = "App">
                                <a href = {PdfMercadosEmergentes} target = "_blank">Mercados emergentes</a>
                            </div>
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/xv_NjV0I8zA?si=3fOotETYwqtPRZdB"
                                title="YouTube video player"
                                frameBorder="0" // Cambiado de "frameborder" a "frameBorder"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin" // Cambiado de "referrerpolicy" a "referrerPolicy"
                                allowFullScreen // Cambiado de "allowfullscreen" a "allowFullScreen"
                            ></iframe>
                        </>
                    )}
                    </div>
                )}
                </div>
            )
            )}
        </div>
        </div>
    );
}

export default EduInflacionEconomia;
