import React, { useState, useEffect } from 'react';
import '../style/EduAdminStyle.css'


/* SEMANA 1 */
import PdfIntroAdmin from '../PDF/Introducción administración de negocios.pdf'
import PdfFundaContayFinanzas from '../PDF/Fundamentos contabilidad y finanzas.pdf'
import PdfGestionRH from '../PDF/Gestion RRHH.pdf'

/* SEMANA 2  */
import PdfMarketingEstrategiasMercado from '../PDF/Marketing Estrategias.pdf'
import PdfOperacionesGestionProduccion from '../PDF/Operaciones y gestión producción.pdf'
import PdfPlanificacionTomaDecisiones from '../PDF/Planificación toma de decisiones.pdf'

/* SEMANA 3 */
import PdfInnovacionyEmprendimiento from '../PDF/Innovación y emprendimiento.pdf'
import PdfAnalisisFinancieroGestionRiesgos from '../PDF/Análisis financiero y gestion de riesgos.pdf'
import PdfEstrategiaCorpCompetitiva from '../PDF/estrategia corporativa y competitividad.pdf'


function EduAdminNegocio() {
    const [visibleSections, setVisibleSections] = useState({
            SeccionSemana1: false,
            SeccionSemana2: false,
            SeccionSemana3: false,
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
                <video autoPlay loop muted id="background-videoAdmin">
                    <source src="https://i.gifer.com/b2M.mp4" type="video/mp4" />
                </video>
                <div className="cont">
                    <h1>ADMINISTRACIÓN DE NEGOCIOS</h1>
                    <div className="section">
                        <p><strong>PROFESOR: BAIRON HORNA ALVAREZ</strong></p>
                        <p><strong>MODALIDAD: VIRTUAL</strong></p>
                        <p><strong>HORARIOS: OPEN</strong></p>
                        <p><strong>AULA: ADMINISTRACIÓN</strong></p>
                        <p><strong>DURACIÓN: 4 semanas</strong></p>
                    </div>
                    <br />
                    {['SeccionSemanas1', 'SeccionSemanas2', 'SeccionSemanas3'].map((sections, index) => (
                        <div key={sections} id={sections} onClick={() => toggleSection(sections)} className="sections">
                            <h2>{`SEMANA ${index + 1}`}</h2>
                            {visibleSections[sections] && (
                                <div>
                                    {index === 0 && <>
                                    <div>
                                        <p>
                                            <strong>Introducción a la Administración de Negocios</strong><br />
                                            La administración de negocios es una disciplina que se encarga de la organización,
                                            dirección, planificación y control de los recursos de una empresa para alcanzar sus
                                            objetivos de manera eficiente y efectiva. Implica la toma de decisiones estratégicas y
                                            operativas para optimizar el desempeño organizacional.
                                        </p>
                                    </div>
                                    <div>
                                        <p>
                                            <strong>Importancia de la Administración en el Ámbito Empresarial</strong> <br />
                                            La administración de negocios es crucial para la sostenibilidad y crecimiento de cualquier
                                            organización. A través de una buena administración, las empresas pueden: <br />
                                            • Mejorar la eficiencia operativa. <br />
                                            • Maximizar la rentabilidad. <br />
                                            • Adaptarse a cambios del entorno económico y de mercado. <br />
                                            • Optimizar el uso de recursos humanos, financieros y materiales.
                                        </p>
                                    </div>
                                    <div>
                                        <p>
                                            <strong>Conceptos Básicos de Contabilidad</strong>
                                            1. Activos: Recursos con valor económico que posee una empresa (efectivo,
                                            inventarios, propiedades, etc.). <br />
                                            2. Pasivos: Obligaciones financieras de una empresa (deudas, préstamos, cuentas por
                                            pagar). <br />
                                            3. Patrimonio: Diferencia entre activos y pasivos, representa el valor neto de la
                                            empresa. <br />
                                            4. Ingresos: Dinero que recibe una empresa por sus actividades económicas. <br />
                                            5. Gastos: Costos incurridos para generar ingresos (sueldos, alquiler, servicios, etc.). <br />
                                            6. Estados Financieros: <br />
                                            o Balance General: Presenta la situación financiera de la empresa en un
                                            momento específico.  <br />
                                            o Estado de Resultados: Muestra los ingresos, costos y utilidad neta en un
                                            período determinado. <br />
                                            o Estado de Flujo de Efectivo: Refleja las entradas y salidas de efectivo.
                                        </p>
                                    </div>
                                    <div>
                                        <p>
                                            <strong>Fundamentos de Contabilidad y Finanzas</strong> <br />
                                            La contabilidad y las finanzas son pilares fundamentales en la administración de empresas.
                                            Mientras que la contabilidad se centra en la recopilación, registro y análisis de la
                                            información financiera, las finanzas se encargan de la gestión, planificación e inversión de
                                            los recursos económicos.
                                        </p>
                                    </div>
                                    <div>
                                        <p>
                                            <strong>Gestión de Recursos Humanos</strong> <br />
                                            La gestión de recursos humanos (GRH) es un proceso clave dentro de las organizaciones,
                                            cuyo objetivo es atraer, desarrollar y retener talento humano para contribuir al
                                            cumplimiento de los objetivos empresariales. Esta disciplina abarca la planificación,
                                            selección, formación y motivación del personal.
                                        </p>
                                    </div>
                                    <div>
                                        <p>
                                            <strong>Importancia de la Gestión de Recursos Humanos</strong> <br />
                                                • Incrementa la productividad: Asegura que los empleados tengan las
                                                habilidades necesarias y estén motivados. <br />
                                                • Fomenta un buen clima laboral: Reduce conflictos y mejora la satisfacción
                                                de los empleados. <br />
                                                • Alinea los objetivos individuales con los organizacionales: Asegura que los
                                                esfuerzos del personal contribuyan al éxito de la empresa. <br />
                                                • Mejora la retención de talento: Reduce la rotación de empleados y evita
                                                costos asociados a la contratación y capacitación
                                        </p>
                                    </div>
                                        <h3>MATERIAL DE APOYO</h3>
                                        <p>DOCUMENTAION COMPLETA DE LA SEMANA EN PDF</p>
                                        <div className = "App">
                                            <a href = {PdfIntroAdmin} target = "_blank">Intro Administracion de negocios</a>
                                        </div>
                                        
                                        <div className = "App">
                                            <a href = {PdfFundaContayFinanzas} target = "_blank">Fundamentos de Contabilidada y finanzas</a>
                                        </div>
                                        <div className = "App">
                                            <a href = {PdfGestionRH} target = "_blank">Gestion de Recursos Humanos</a>
                                        </div>
                                        <div className="App">
                                            <iframe 
                                                width="560" 
                                                height="315" 
                                                src="https://www.youtube.com/embed/EY07a0nzr7Y?si=zjmhwBmQPj4yqgPC" 
                                                title="YouTube video player" 
                                                frameBorder="0" 
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                                referrerPolicy="strict-origin-when-cross-origin" 
                                                allowFullScreen 
                                            ></iframe>

                                        </div>
                                    </>}
                                    {index === 1 && <>
                                        <div>
                                            <p>
                                                <strong>Marketing y Estrategias de Mercado</strong> <br />
                                                El marketing es una disciplina que estudia el comportamiento del mercado y las
                                                necesidades de los consumidores con el fin de desarrollar estrategias que permitan
                                                posicionar productos o servicios de manera efectiva. La implementación de estrategias de
                                                mercado adecuadas es crucial para que las empresas logren atraer y retener clientes.
                                            </p>
                                        </div>
                                        <div>
                                            <p>
                                                <strong>Conceptos Fundamentales del Marketing</strong>
                                                1. Producto: Bien o servicio ofrecido al mercado para satisfacer una necesidad. <br />
                                                2. Precio: Valor monetario asignado a un producto o servicio. <br />
                                                3. Plaza (Distribución): Canales a través de los cuales el producto llega al
                                                consumidor. <br />
                                                4. Promoción: Estrategias de comunicación utilizadas para dar a conocer el
                                                producto. <br />
                                                5. Segmentación del mercado: División del mercado en grupos homogéneos de
                                                consumidores con características y necesidades similares. <br />
                                                6. Posicionamiento: Estrategia para diferenciar un producto en la mente del
                                                consumidor.
                                            </p>
                                        </div>
                                        <div>
                                            <p>
                                                <strong>Estrategias de Mercado</strong> <br />
                                                1. Marketing Digital: Uso de plataformas digitales, redes sociales y publicidad
                                                online para alcanzar al público objetivo. <br />
                                                2. Marketing de Contenidos: Creación de contenido relevante para atraer y
                                                fidelizar clientes. <br />
                                                3. Marketing Relacional: Estrategias para mantener relaciones a largo plazo con
                                                los clientes. <br />
                                                4. Marketing de Experiencia: Enfoque en la creación de experiencias positivas
                                                para los consumidores. <br />
                                                5. Estrategia de Diferenciación: Ofrecer un producto único en el mercado. <br />
                                                6. Estrategia de Costos Bajos: Competir en el mercado ofreciendo precios más
                                                bajos que la competencia. <br />
                                                7. Estrategia de Nicho: Enfocarse en un segmento de mercado específico con
                                                necesidades particulares
                                            </p>
                                        </div>
                                        <div>
                                            <p>
                                                <strong>Operaciones y Gestión de la Producción</strong> <br />
                                                La gestión de operaciones y producción es un proceso fundamental en las organizaciones,
                                                encargado de planificar, coordinar y controlar los recursos necesarios para la fabricación de
                                                bienes y la prestación de servicios. Su objetivo es mejorar la eficiencia y calidad,
                                                optimizando los costos y tiempos de producción.
                                            </p>
                                        </div>
                                        <div>
                                            <p>
                                                <strong>Conceptos Claves en la Gestión de Operaciones</strong>br
                                                1. Eficiencia Operativa: Uso óptimo de los recursos disponibles para minimizar
                                                costos y maximizar la producción. <br />
                                                2. Productividad: Relación entre los insumos utilizados y la cantidad de bienes o
                                                servicios producidos. <br />
                                                3. Calidad: Conjunto de características de un producto o servicio que satisfacen
                                                las necesidades del cliente. <br />
                                                4. Capacidad de Producción: Volumen máximo de producción que una empresa
                                                puede alcanzar en un periodo determinado. <br />
                                                5. Cadena de Suministro: Red de empresas y procesos involucrados en la
                                                producción y distribución de bienes o servicios.
                                            </p>
                                        </div>
                                        <div>
                                            <p>
                                                <strong>Estrategias de Gestión de la Producción</strong> <br />
                                                1. Justo a Tiempo (JIT): Producción basada en la demanda real, reduciendo
                                                inventarios y costos. <br />
                                                2. Manufactura Esbelta (Lean Manufacturing): Eliminación de desperdicios
                                                para mejorar la eficiencia. <br />
                                                3. Automatización y Digitalización: Uso de tecnología para optimizar los
                                                procesos productivos. <br />
                                                4. Planificación de Recursos Empresariales (ERP): Sistemas integrados para la
                                                gestión eficiente de operaciones. <br />
                                                5. Mantenimiento Productivo Total (TPM): Estrategia para minimizar fallos y
                                                optimizar la vida útil de los equipos.
                                            </p>
                                        </div>
                                        <div>
                                            <p>
                                                <strong>Planificación y Toma de Decisiones Empresariales</strong> <br />
                                                La planificación y la toma de decisiones son procesos fundamentales en la administración
                                                empresarial. Una adecuada planificación permite establecer objetivos claros y definir
                                                estrategias para alcanzarlos, mientras que la toma de decisiones eficaz garantiza la
                                                resolución de problemas y la optimización de los recursos organizacionales.
                                            </p>
                                        </div>
                                        <div>
                                            <p>
                                                <strong>Importancia de la Planificación Empresarial</strong> <br />
                                                • Permite establecer objetivos claros y alcanzables. <br />
                                                • Facilita la optimización de recursos. <br />
                                                • Reduce la incertidumbre y minimiza riesgos. <br />
                                                • Favorece la adaptación a cambios del entorno. <br />
                                                • Mejora la coordinación y el control organizacional. <br />
                                            </p>
                                        </div>
                                        <h3>MATERIAL DE APOYO</h3>
                                        <p>DOCUMENTAION COMPLETA DE LA SEMANA EN PDF</p>
                                        <div className = "App">
                                            <a href = {PdfMarketingEstrategiasMercado} target = "_blank">Marketing y estrategias de mercado</a>
                                        </div>
                                        
                                        <div className = "App">
                                            <a href = {PdfOperacionesGestionProduccion} target = "_blank">Operaciones y gestion de produccion</a>
                                        </div>
                                        <div className = "App">
                                            <a href = {PdfPlanificacionTomaDecisiones} target = "_blank">Planificacion y toma de decisiones</a>
                                        </div>
                                        <iframe 
                                            width="560" 
                                            height="315" 
                                            src="https://www.youtube.com/embed/nACJLWCmzk8?si=32KaAspJLLx98J3g" 
                                            title="YouTube video player" 
                                            frameBorder="0" 
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                            referrerPolicy="strict-origin-when-cross-origin" 
                                            allowFullScreen 
                                        ></iframe>
                                        <br />
                                        <iframe 
                                            width="560" 
                                            height="315" 
                                            src="https://www.youtube.com/embed/RwgcCyvZXNs?si=SZqLwq51VhPmD22L" 
                                            title="YouTube video player" 
                                            frameBorder="0" 
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                            referrerPolicy="strict-origin-when-cross-origin" 
                                            allowFullScreen 
                                        ></iframe>


                                    </>}
                                    {index === 2 && <>
                                        <div>
                                            <p>
                                                <strong>Innovación y Emprendimiento</strong> <br />
                                                La innovación y el emprendimiento son factores clave en el crecimiento económico y en la
                                                evolución de los mercados. La innovación permite la creación de nuevos productos,
                                                servicios o procesos que mejoran la competitividad, mientras que el emprendimiento
                                                impulsa la generación de negocios sostenibles y escalables.
                                            </p>
                                        </div>
                                        <div>
                                            <p>
                                                <strong>Importancia de la Innovación y el Emprendimiento</strong> <br />
                                                • Fomentan el desarrollo económico y social. <br />
                                                • Impulsan la competitividad empresarial. <br />
                                                • Generan empleo y nuevas oportunidades de negocio. <br />
                                                • Favorecen la transformación digital y tecnológica. <br />
                                                • Permiten la diferenciación en mercados saturados
                                            </p>
                                        </div>
                                        <div>
                                            <p>
                                                <strong>Análisis Financiero y Gestión de Riesgos</strong> <br />
                                                El análisis financiero y la gestión de riesgos son procesos fundamentales para la toma de
                                                decisiones en las organizaciones. A través de herramientas de evaluación económica, las
                                                empresas pueden optimizar sus recursos, minimizar incertidumbres y mejorar su
                                                rentabilidad.
                                            </p>
                                        </div>
                                        <div>
                                            <p>
                                                <strong>Importancia del Análisis Financiero</strong> <br />
                                                • Evalúa la salud económica de la empresa. <br />
                                                • Ayuda a tomar decisiones de inversión y financiamiento. <br />
                                                • Permite identificar áreas de mejora en la gestión financiera. <br />
                                                • Reduce el riesgo de quiebra o pérdidas económicas.
                                            </p>
                                        </div>
                                        <div>
                                            <p>
                                                <strong>Estrategia Corporativa y Competitividad</strong> <br />
                                                La estrategia corporativa es un conjunto de acciones planificadas que permiten a las
                                                empresas alcanzar sus objetivos a largo plazo y mantenerse competitivas en el
                                                mercado. La competitividad empresarial depende de la capacidad de innovar,
                                                adaptarse a cambios y diferenciarse de la competencia.
                                            </p>
                                        </div>
                                        <div>
                                            <p>
                                                <strong>Importancia de la Estrategia Corporativa</strong> <br />
                                                Define la dirección y los objetivos de la empresa. <br />
                                                Optimiza el uso de los recursos empresariales. <br />
                                                Permite la adaptación a entornos cambiantes. <br />
                                                Facilita la toma de decisiones basada en análisis y datos. <br />
                                                Aumenta la ventaja competitiva en el sector.
                                            </p>
                                        </div>
                                        <h3>MATERIAL DE APOYO</h3>
                                        <p>DOCUMENTAION COMPLETA DE LA SEMANA EN PDF</p>
                                        <div className = "App">
                                            <a href = {PdfInnovacionyEmprendimiento } target = "_blank">Innovacion empresarial</a>
                                        </div>
                                        
                                        <div className = "App">
                                            <a href = {PdfAnalisisFinancieroGestionRiesgos} target = "_blank">Analisis financiero y gestion de riesgos</a>
                                        </div>
                                        <div className = "App">
                                            <a href = {PdfEstrategiaCorpCompetitiva} target = "_blank">Estrategias corporativas competitivas</a>
                                        </div>
                                        <iframe 
                                            width="560" 
                                            height="315" 
                                            src="https://www.youtube.com/embed/2TZAiZkH7ew?si=gbX_xMUCYKIDvc4u" 
                                            title="YouTube video player" 
                                            frameBorder="0" 
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                            referrerPolicy="strict-origin-when-cross-origin" 
                                            allowFullScreen 
                                        ></iframe>
                                        <br />
                                        <iframe 
                                            width="560" 
                                            height="315" 
                                            src="https://www.youtube.com/embed/CTg0GZQZEkA?si=_54P-ktKVmreoLtp" 
                                            title="YouTube video player" 
                                            frameBorder="0" 
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                            referrerPolicy="strict-origin-when-cross-origin" 
                                            allowFullScreen 
                                        ></iframe>


                                    </>}
                                    
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
export default EduAdminNegocio;
