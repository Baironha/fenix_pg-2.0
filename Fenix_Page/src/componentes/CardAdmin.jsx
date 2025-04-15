import '../style/CarAdminStyle.css';
import React, { useState, useEffect } from 'react';

function CarsdAdmin() {
    const [likes, setLikes] = useState(null);
    const [dislikes, setDislikes] = useState(null);
    const [usuariosRegistrados, setUsuariosRegistrados] = useState(0);
    const [solicitudesSocios, setSolicitudesSocios] = useState(0);

    useEffect(() => {
        const updateCounts = () => {
            setLikes(parseInt(localStorage.getItem('likes')) || 0);
            setDislikes(parseInt(localStorage.getItem('dislikes')) || 0);
        };

        updateCounts();
        window.addEventListener('storage', updateCounts);

        return () => window.removeEventListener('storage', updateCounts);
    }, []);

    useEffect(() => {
        // Obtener cantidad de usuarios registrados
        const fetchUsuarios = async () => {
            try {
                const response = await fetch('http://localhost:3001/Usuarios');
                if (!response.ok) throw new Error('Error al obtener los usuarios');
                const data = await response.json();
                setUsuariosRegistrados(data.length);
            } catch (error) {
                console.error('Error al cargar los usuarios:', error);
            }
        };

        // Obtener cantidad de solicitudes de socios
        const fetchSolicitudes = async () => {
            try {
                const response = await fetch('http://localhost:3001/SolicitudSocio');
                if (!response.ok) throw new Error('Error al obtener las solicitudes');
                const data = await response.json();
                setSolicitudesSocios(data.length);
            } catch (error) {
                console.error('Error al cargar las solicitudes:', error);
            }
        };

        fetchUsuarios();
        fetchSolicitudes();
    }, []);

    if (likes === null || dislikes === null) {
        return <p>Cargando...</p>;
    }

    return (
        <div>
            <h1 className="TituloAdminPrincipal"><strong>ADMINISTRACION PRINCIPAL</strong></h1>
            <div id="ContCardsAdmin">
                <div id="ContCardAdmin">
                    <h2 id="TUsuariosRegistrados">USUARIOS REGISTRADOS</h2>
                    <p id="ContUsuarios"><strong>{usuariosRegistrados}</strong></p>
                </div>
                <br />
                <div id="ContCardAdmin">
                    <h2 id="TLike">Like y dislikes en la página</h2>
                    <p id="ContLike">LIKES <strong>{likes}</strong></p>
                </div>
                <br />
                <div id="ContCardAdmin">
                    <h2 id="TDisLike">Dislike en la página</h2>
                    <p id="ContDisLike"><strong>{dislikes}</strong></p>
                </div>
                <br />
                <div id="ContCardAdmin">
                    <h2 id="TSoliSocios">Solicitudes de socios</h2>
                    <p id="ContSolicitudesSocios"><strong>{solicitudesSocios}</strong></p>
                </div>
            </div>
        </div>
    );
}

export default CarsdAdmin;
