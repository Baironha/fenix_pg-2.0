import React from "react";
import { useNavigate } from "react-router-dom";
import '../style/CampusStyle.css';

const Campus = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div id="contTitulosCampus">
                <h1 id="MisCursos">MIS CURSOS</h1>
                <h2 id="SubMisCursos">Fenix</h2>
            </div>
            <div id="ContMisCursos">
                <div id="card1" onClick={() => navigate("/EduAdmin")} className="card">
                    <h1 id="Titulo1">INTRO. ADMINISTRACION DE NEGOCIOS</h1>
                    <img id="ImgFinanciero" src="https://planmc2.com/wp-content/uploads/2024/06/diseno-web.svg"/>
                    <p id="TextCampus"><strong>Aprende a administrar tu negocio con nuestro curso de administración de negocios</strong></p>
                </div>
                <div id="card2" onClick={() => navigate("/EduDtScients")} className="card">
                    <h1 id="Titulo2">INTRO. Ciencia de datos</h1>
                    <img id="ImgDatos" src="https://planmc2.com/wp-content/uploads/2024/06/SEO-SEM.svg" alt="" />
                    <p id="TextCampus"><strong>Aprende a manejar tus datos y sacarles provecho para</strong></p>
                    <p id="TextCampus"><strong>potenciar tu negocio</strong></p>
                </div>
                <div id="card3" onClick={() => navigate("/EduEconomia")} className="card">
                    <img id="ImgDesarrollo" src="https://planmc2.com/wp-content/uploads/2024/06/diseno-grafico.svg" alt="" />
                    <h1 id="Titulo3">INFLACIÓN Y ECONOMÍA</h1>
                    <p id="TextCampus"><strong>Potencia tus conocimientos y habilidades al entender el mundo de la economía</strong></p>
                </div>
                <div id="card4" onClick={() => navigate("/EduEmpleabilidad")} className="card">
                    <img id="ImgAdministracion" src="https://planmc2.com/wp-content/uploads/2024/06/administracion-redes-sociales.svg" alt="" />
                    <h1 id="Titulo4">Empleabilidad y desarrollo personal</h1>
                    <p id="TextCampus"><strong>Descubre como puedes desarrollar tu mejor version</strong></p>
                </div>
            </div>
        </div>
    );
};

export default Campus;
