import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../style/NavBarStyle.css";

function NavBar() {
    const navigate = useNavigate();

    const handleLogin = () => {
        Swal.fire({
            title: "Redirigiendo...",
            text: "Por favor espere, está siendo redirigido al Login",
            icon: "info",
            timer: 2000,
            showConfirmButton: false
        }).then(() => {
            navigate("/login"); // Se cambió a minúsculas para evitar errores
        });
    };

    const handleRegis= () => {
        Swal.fire({
            title: "Redirigiendo...",
            text: "Por favor espere, está siendo redirigido al Login",
            icon: "info",
            timer: 2000,
            showConfirmButton: false
        }).then(() => {
            navigate("/Registrarse"); // Se cambió a minúsculas para evitar errores
        });
    };

    const handleContactChange = (event) => {
        const value = event.target.value;
        if (value) window.location.href = value;
    };

    const handleServicesChange = (event) => {
        const value = event.target.value;
        const text = event.target.options[event.target.selectedIndex].text;

        if (value) {
            Swal.fire({
                title: `Llamando a ${text}...`,
                icon: "info",
                timer: 3000,
                showConfirmButton: false,
            }).then(() => {
                window.location.href = value;
            });
        }
    };

    return (
        <div>
            <ul>
                {/* Contacto */}
                <li>
                    <select onChange={handleContactChange} defaultValue="" className="nav-item">
                        <option value="" disabled>Contacto</option>
                        <option value="tel:87409661">Tel: 87409661</option>
                        <option value="http://localhost:5173/Contact">Email: bayronha077@gmail.com</option>
                        <option value="https://www.instagram.com/baironh_alvarez.cr/?__d=1">
                            Instagram: baironh_alvarez.cr
                        </option>
                    </select>
                </li>

                {/* Servicios */}
                <li>
                    <select onChange={handleServicesChange} defaultValue="" className="nav-item">
                        <option value="" disabled>Servicios</option>
                        <option value="tel:+50612345678">Análisis de datos</option>
                        <option value="tel:+50687654321">Administración de proyectos</option>
                        <option value="tel:+50656789012">Asesoría financiera</option>
                        <option value="tel:+50634567890">Desarrollo web</option>
                    </select>
                </li>
                <li id="RedirectRegis">
                    <button onClick={handleRegis} className="nav-item">Registrarse</button>
                </li>

                {/* LOGIN */}
                <li id="RedirectLogin">
                    <button onClick={handleLogin} className="nav-item">Login</button>
                </li>
            </ul>
        </div>
    );
}

export default NavBar;
