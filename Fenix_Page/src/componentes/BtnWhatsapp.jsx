import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "../style/BtnWhatsappStyle.css"; // Asegúrate de que este archivo CSS exista

function BtnWhatsapp() {
    return (
        <a  href="https://wa.me/50687409661"  target="_blank"  rel="noopener noreferrer" className="whatsapp-button">
            <FaWhatsapp className="whatsapp-icon" />
        </a>
    );
}

export default BtnWhatsapp;
