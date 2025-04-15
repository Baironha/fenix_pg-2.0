import React from 'react'
import { Link} from "react-router-dom";

function AnalisisDtHome() {
    return (
        <div >
                <h1 id="TituloEducacionFenix">Analisis de datos</h1>
                <h3 id="SubtituloEducacionFenix">INFLACION MUNDIAL</h3>
                <div id="FenixEducacion">
                    <div>
                        <img id="ImgAstronauta" src="https://planmc2.com/wp-content/uploads/2024/06/astrounat-testimonials.webp" alt="" />
                    </div>
                    <div id="TextosEducacion">
                        <p> <strong>Descubri el increible mundo del Data scients</strong></p>
                        <p> <strong>Visita nustra pagina web y mira nustros analisis de datos</strong></p>
                        <p> <strong>Si deseas formar parte del equipo fenix como socio contactanos al correo fenixlatam@gmail.com</strong></p>
                        <p><strong>Aprende sobre Data Scients en nuestro campus virtual</strong></p>
                        <button id="BtnEduFenix"><Link to={'/AnalisisDt'}>¡Analisis de datos!</Link></button>
                    </div>
                </div>
            </div>
    )
}

export default AnalisisDtHome