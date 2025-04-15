import { useNavigate } from "react-router-dom";
import { FaHome, FaUser, FaChartBar, FaEnvelope, FaHardHat } from "react-icons/fa";
import Swal from "sweetalert2";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "../style/SideBarStyle.css";

const Sidebar = () => {
    const navigate = useNavigate();

    return (
        <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="sidebar"
        >
        <ul className="sidebar-menu">
            <li onClick={() => navigate("/Admin")} className="sidebar-item">
            <FaHome size={24} />
            <span>Inicio</span>
            </li>

            <li 
                onClick={() => {
                    Swal.fire({
                    title: "Cerrando sesión",
                    text: "Redirigiendo...",
                    icon: "success",
                    timer: 2000, // 2 segundos
                    timerProgressBar: true,
                    didClose: () => {
                        localStorage.clear(); // Limpia el localStorage
                        navigate("/"); // Redirige después de los 2 segundos
                    },
                    });
                }} 
                className="sidebar-item"
                >
                <FaHardHat size={24} />
                <span>Cerrar sesión</span>
                </li>


            <li onClick={() => navigate("/GestionUsu")} className="sidebar-item">
            <FaUser size={24} />
            <span>Gestión de Usuarios</span>
            </li>
            <li onClick={() => navigate("/GestionTrabajadores")} className="sidebar-item">
            <FaHardHat size={24} />
            <span>Gestion de trabajadores</span>
            </li>
            <li onClick={() => navigate("/GestionSocios")} className="sidebar-item">
            <FaHardHat size={24} />
            <span>Gestion de solicitudes socios</span>
            </li>
            <li className="sidebar-item">
            <label className="sidebar-label">Soporte</label>
            <select
                className="sidebar-select"
                onChange={(e) => {
                if (e.target.value) window.location.href = `mailto:${e.target.value}`;
                }}
            >
                <option value="">Seleccionar contacto</option>
                <option value="bhorna@fwdcostarica.com">bhorna@fwdcostarica.com</option>
                <option value="ssalasl@fwdcostarica.com">ssalasl@fwdcostarica.com</option>
                <option value="bvega@fwdcostarica.com">bvega@fwdcostarica.com</option>
            </select>
            </li>
            
            
        </ul>
        </motion.div>
    );
};

export default Sidebar;
