import React from "react";
import '../style/Headerstyle.css';

function HeaderHome() {
    return (
        <div id="container">

            <div id="ContainerImgHeader">
                <img id="ImgFondoHeader" src="https://planmc2.com/wp-content/uploads/2017/08/starry-space-planmc2.gif" alt="" />
            </div>
            {/* Título principal centrado arriba */}
            <h1 id="main-title">FENIX</h1>

            {/* Contenido alineado a la izquierda */}
            <div id="content">
                <header>
                    {/* Contenedor con los títulos "ECONOMIA" y "DEL SIGLO XXI" */}
                    <div id="economy-container">
                        <h1 id="economy-title">ECONOMIA</h1>
                        <h4 id="sub-title">DEL SIGLO XXI</h4>
                    </div>

                    {/* Título "Y ANALISIS DE DATOS" */}
                    <h1 id="analysis-title">Y ANALISIS DE DATOS</h1>

                    {/* Descripción */}
                    <p className="subtitle">
                        Descubre cómo la <span className="highlight">economía moderna</span> puede transformar tu presencia en el mundo de los negocios y llevar tu vida a nuevas <span className="red-dot">alturas.</span>
                    </p>
                </header>
            </div>
        </div>
    );
}

export default HeaderHome;
