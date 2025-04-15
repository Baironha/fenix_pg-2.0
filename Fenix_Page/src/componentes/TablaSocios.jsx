import React, { useState, useEffect } from "react";
import Swal from "sweetalert2"; // Importa SweetAlert
import '../style/TablaSocioStyle.css';

function TablaSocios() {

    const [dato, setDatos] = useState([]);
    const [Mostrar, setMostrar] = useState(false);
    const [seleccionSocio, setseleccionSocio] = useState([]);
    const [SeleccionandoSOcios, settrabajadorseleccionado] = useState(null); // Guardar usuario seleccionado para actualizar

    useEffect(() => {
        obtenerDatos();
    }, []);

    const obtenerDatos = async () => {
        try {
            const response = await fetch("http://localhost:3001/SolicitudSocio");
            const data = await response.json();
            setDatos(data);
            setMostrar(true);
        } catch (error) {
            console.error("Error al obtener datos:", error);
        }
    };

    const agregarUsuario = async () => {
         /* Obtener los valores de los inputs */
        const rol = document.getElementById("Inputrol").value;
        const estado = document.getElementById("InputEstado").value;

        /* Verificar si los campos están llenos */
        if (rol && estado) {
            /* se crea un objeto */
            const nuevoUsuario = {
                rol,
                estado
            };

            try {
                /* Agregar el nuevo usuario a la base de datos (db.json) */
                const response = await fetch("http://localhost:3001/SolicitudSocio", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(nuevoUsuario),
                });

                if (response.ok) {
                    Swal.fire("¡Éxito!", "Usuario agregado con éxito", "success");
                    obtenerDatos(); /* Actualizar la tabla con los nuevos datos */
                } else {
                    Swal.fire("Error", "Hubo un problema al agregar el usuario", "error");
                }
            } catch (error) {
                console.error("Error al agregar usuario:", error);
            }
        } else {
            Swal.fire("Campos incompletos", "Por favor, llena todos los campos", "warning");
        }
    };




    const manejarSeleccionTrabajadores = (id) => {
        setseleccionSocio((prevSeleccionados) =>
            prevSeleccionados.includes(id)
                ? prevSeleccionados.filter((item) => item !== id)
                : [...prevSeleccionados, id]
        );
        /*  Si selecciona un trabajador, cargar su información en el formulario */
        const trabajadorSeleccionado = dato.find((usuario) => usuario.id === id);
        settrabajadorseleccionado(trabajadorSeleccionado);
    };





    const eliminarTrabajador = async () => {
        try {
            for (let id of seleccionSocio) {
                await fetch(`http://localhost:3001/SolicitudSocio/${id}`, {
                    method: "DELETE",
                });
            }
            setDatos((prevDatos) =>
                prevDatos.filter((Usuarios) => !seleccionSocio.includes(Usuarios.id))
            );
            setseleccionSocio([]);
        } catch (error) {
            console.error("Error al eliminar Trabajador:", error);
        }
    };





    const actualizarUsuario = async () => {
        if (!SeleccionandoSOcios) {
            
            return;
        }
        const updatedUser = {
            ...SeleccionandoSOcios,
            rol: document.getElementById("Inputrol").value,
            Estado: document.getElementById("InputEstado").value
            
        };
        try {
            const response = await fetch(`http://localhost:3001/SolicitudSocio/${SeleccionandoSOcios.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedUser),
            });
            if (response.ok) {
                Swal.fire("¡Éxito!", "Usuario ACTUAZLIZAR con éxito", "success");
                    obtenerDatos(); // Actualizar la tabla con los nuevos dato
            } else {
                Swal.fire("Error", "Hubo un problema al ACTUALIZAR el usuario", "error");
            }
        } catch (error) {
            console.error("Error al actualizar el usuario:", error);
        }
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        settrabajadorseleccionado((prevUsuario) => ({
            ...prevUsuario,
            [id]: value
        }));
    };

    return (
        <div>
            <div id="ContFormulariosocio">
                <label htmlFor="InputRol">Rol:</label><br />
                <input id="InputRol" type="text" placeholder="Ingrese el rol" defaultValue={SeleccionandoSOcios?.rol || ""} onChange={handleInputChange}/>

                <label htmlFor="InputEstado">Estado:</label><br />
                <input id="InputEstado" type="texs" placeholder="Ingrese el estado de la solicitud" defaultValue={SeleccionandoSOcios?.estado || ""} onChange={handleInputChange}/>
            </div>
            <div id="ContainerTablaSocio">
                <h1 id="TituloGestionsocio">GESTION DE SOCIOS</h1>
                <div id="ContainerBtnsocio">
                    <button id="MostrarTablasocio" onClick={obtenerDatos}>Mostrar Tabla</button><br /><br />
                    <br />
                    <button id="Eliminarsocio" onClick={eliminarTrabajador}>Eliminar Trabajador</button><br /><br />
                    <br />
                    <button id="Actualizarsocio" onClick={actualizarUsuario}>Actualizar Usuario</button><br /><br />
                    <br />
                    <button id="Agregarsocio" onClick={agregarUsuario}>Agregar Usuario</button>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <table id="TablaSocio">
                    <thead id="theadsocio">
                        <tr>
                            <th>✔</th>
                            <th>ID</th>
                            <th>ROL</th>
                            <th>Nombre</th>
                            <th>EMAIL</th>
                            <th>TEL</th>
                            <th>Nombre Proyecto</th>
                            <th>DESCRIPCION</th>
                            <th>PDF</th>
                            <th>ESTADO</th>
                        </tr>
                    </thead>
                    <tbody id="tbodysocio">
                        {Mostrar &&
                            dato.map((socios) => (
                                <tr key={socios.id}>
                                    <td>
                                        <input
                                            type="checkbox"
                                            checked={seleccionSocio.includes(socios.id)}
                                            onChange={() => manejarSeleccionTrabajadores(socios.id)}
                                        />
                                    </td>
                                    <td>{socios.id}</td>
                                    <td>{socios.rol}</td>
                                    <td>{socios.nombre}</td>
                                    <td>{socios.email}</td>
                                    <td>{socios.telSocio}</td>
                                    <td>{socios.nombreproyecto}</td>
                                    <td>{socios.descripcion}</td>
                                    <td>{socios.pdfsocio}</td>
                                    <td>{socios.estado}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
            <br />
        </div>
    );
}

export default TablaSocios;
