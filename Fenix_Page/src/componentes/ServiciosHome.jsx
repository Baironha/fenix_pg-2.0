import React from "react";
import '../style/ServiciosHome.css'


function ServiciosHome(){
    const handleContactChange = (event) => {
        const value = event.target.getAttribute('value'); /* getAttribute para acceder al valor del botón */
        if (value) window.location.href = value;
        };
    return(
        <div>
            
            <h1 className="titulo-servicios">SERVICIOS</h1>
            <h1 className="titulo-principales"><strong>PRINCIPALES</strong></h1>
            <div id="ContServicios">
                <div id="AsesoramientoFinanciero">
                    <img id="ImgFinanciero" src="https://planmc2.com/wp-content/uploads/2024/06/diseno-web.svg"/>
                    <h2  id="TituloAseFinanciero">ASESORAMIENTO FINANCIERO</h2>
                    <p id="TextoFinanciero"><strong>Brindamos los conocimientos y herramientas necesarias para potenciar tu negocio de la mano de profesionales en el area</strong></p>
                </div>
                
                <div id="AnalisisDatos">
                    <img id="ImgDatos" src="https://planmc2.com/wp-content/uploads/2024/06/SEO-SEM.svg" alt="" />
                    <h2 id="TituloAnaliDatos">ANALISIS DE DATOS</h2>
                    <p id="TextoAnalisis"><strong>Analizamos tu proyecto, mercado y datos para optimizar y mejorar tus resultados</strong></p>
                </div>

                <div id="DesarrolloPaginasWeb">
                    <img id="ImgDesarrollo" src="https://planmc2.com/wp-content/uploads/2024/06/diseno-grafico.svg" alt="" />
                    <h2 id="TituloDesrrolloWeb">DESARROLLO DE PAGINAS WEB</h2>
                    <p id="TextoDesarrolloWeb"><strong>Desarrollamos la pagina web de tus sueños para tu proyecto, facita exito con una pagina web</strong></p>
                </div>

                <div id="AdministracionProyectos">
                    <img id="ImgAdministracion" src="https://planmc2.com/wp-content/uploads/2024/06/administracion-redes-sociales.svg" alt="" />
                    <h2 id="TituloAdminProyectos">ADMINISTRACION DE PROYECTOS</h2>
                    <p id="TextoAdminProyect"><strong>Te asesoramos y enseñamos como administrar tu negocio, manejar KPI y alcanzar nuevas metas </strong></p>
                </div>
            </div>
            <button id="BtnContactServicios" onClick={handleContactChange} value="mailto:bhorna@fwdcostarica.com">Contactanos</button>
        </div>
    )
}

export default ServiciosHome