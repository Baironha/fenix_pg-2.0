import React from "react";
import '../style/EducacionStyle.css'
import { Link} from "react-router-dom";

function EduacionHome(){
    return(
        <div >
            <h1 id="TituloEducacionFenix">EDUCACION FENIX</h1>
            <h3 id="SubtituloEducacionFenix">ESTUDIA EN FENIX DE FORMA GRATUITA</h3>
            <div id="FenixEducacion">
                <div>
                    <img id="ImgAstronauta" src="https://planmc2.com/wp-content/uploads/2024/06/astrounat-testimonials.webp" alt="" />
                </div>
                <div id="TextosEducacion">
                    <p> <strong>En Fenix te brindamos la oportunidad de ser el profesional que tanto deseas</strong></p>
                    <p> <strong>conviertete en tu personaje favorito y se el emprendedor@ de tus sueños </strong></p>
                    <p> <strong>se tu heroe y rescatate de la inflacion con tus conocimientos y habilidades </strong></p>
                    <p><strong>estudia de forma gratuita con nosotros, de la mano con profesionales </strong></p>
                    <button id="BtnEduFenix"><Link to={'/Campus'}>¡ESTUDIA AQUI!</Link></button>
                </div>
            </div>
        </div>
    )
}
export default EduacionHome