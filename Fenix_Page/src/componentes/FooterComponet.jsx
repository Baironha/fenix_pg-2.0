import React from "react";
import '../style/FooterPages.css'


function FooterComponet(){
    return(
        <div id="padreFooter">
            <footer>
                <div className="footer-container">
                    <div className="footer-section">
                        <h3>CONTACTO</h3>
                        <p><strong>Admins:</strong></p>
                        <p>Tel: 87409661</p>
                        <p>Email: bhorna@fwdcostarica.com</p>
                    </div>
                    <div className="footer-section">
                        <h3>SOPORTE</h3>
                        <p>saslasl@fwdcostarica.com</p>
                        <p>bvega@fwdcostarica.com</p>
                        <p>bhorna@fwdcostarica.com</p>
                    </div>
                    <div className="footer-section">
                        <h3>Servicios</h3>
                        <p>Analisis de datos</p>
                        <p>Desarrollo web</p>
                        <p>Asesoramiento financiero</p>
                        <p>Adminitracion de proyectos</p>
                    </div>
                    
                </div>
            </footer>

            <div className="footer-bottom">
                <h1><strong>FENIX</strong></h1>
            </div>
        </div>
    )
}


export default FooterComponet