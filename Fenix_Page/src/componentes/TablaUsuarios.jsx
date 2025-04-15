import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import '../style/TablaUsu.css';

function TablaUsuarios() {

    const [dato, setDatos] = useState([]);
    const [Mostrar, setMostrar] = useState(false);
    const [seleccionadosTrabajadores, setSeleccionadosTrabajadores] = useState([]);
    const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null); /* Guardar usuario seleccionado para actualizar */

    useEffect(() => {
        obtenerDatos();
    }, []);

    const obtenerDatos = async () => {
        try {
            const response = await fetch("http://localhost:3001/Usuarios");
            const data = await response.json();
            setDatos(data);
            setMostrar(true);
        } catch (error) {
            console.error("Error al obtener datos:", error);
        }
    };

    const limpiarCampos = () => {
        document.getElementById("InputNombre").value = "";
        document.getElementById("InputEmail").value = "";
        document.getElementById("InputPassword").value = "";
        document.getElementById("InputDireccion").value = "";
    };

    const agregarUsuario = async () => {
        /* Obtener los valores de los inputs antes de vaciarlos */
        const nombre = document.getElementById("InputNombre").value;
        const email = document.getElementById("InputEmail").value;
        const password = document.getElementById("InputPassword").value;
        const direccion = document.getElementById("InputDireccion").value;

        /* Verificar si los campos están llenos */
        if (nombre && email && password && direccion) {
            const nuevoUsuario = {
                rol: "Usuario",
                nombre,
                email,
                password,
                direccion
            };

            try {
                const response = await fetch("http://localhost:3001/Usuarios", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(nuevoUsuario),
                });

                if (response.ok) {
                    Swal.fire("¡Éxito!", "Usuario agregado con éxito", "success");
                    obtenerDatos(); /* Actualizar la tabla con los nuevos datos */
                    limpiarCampos(); /* Vaciar campos solo después de éxito */
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
        setSeleccionadosTrabajadores((prevSeleccionados) =>
            prevSeleccionados.includes(id)
                ? prevSeleccionados.filter((item) => item !== id)
                : [...prevSeleccionados, id]
        );
        const trabajadorSeleccionado = dato.find((usuario) => usuario.id === id);
        setUsuarioSeleccionado(trabajadorSeleccionado);
    };

    const eliminarTrabajador = async () => {
        limpiarCampos(); /* Vaciar campos al hacer clic en el botón */
        try {
            for (let id of seleccionadosTrabajadores) {
                await fetch(`http://localhost:3001/Usuarios/${id}`, {
                    method: "DELETE",
                });
            }
            setDatos((prevDatos) =>
                prevDatos.filter((Usuarios) => !seleccionadosTrabajadores.includes(Usuarios.id))
            );
            setSeleccionadosTrabajadores([]);
        } catch (error) {
            console.error("Error al eliminar Trabajador:", error);
        }
    };

    const actualizarUsuario = async () => {
        /* Obtener los valores de los inputs antes de vaciarlos */
        const nombre = document.getElementById("InputNombre").value;
        const email = document.getElementById("InputEmail").value;
        const password = document.getElementById("InputPassword").value;
        const direccion = document.getElementById("InputDireccion").value;

        if (!usuarioSeleccionado) {
            return;
        }

        /* ctualizar el usuario seleccionado con los valores de los inputs */
        const updatedUser = {
            ...usuarioSeleccionado,
            nombre: nombre,
            email: email,
            password: password,
            direccion: direccion,
        };

        try {
            const response = await fetch(`http://localhost:3001/Usuarios/${usuarioSeleccionado.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedUser),
            });

            if (response.ok) {
                Swal.fire("¡Éxito!", "Usuario actualizado con éxito", "success");
                obtenerDatos(); /* Actualizar la tabla con los nuevos datos */
                limpiarCampos(); /* Vaciar campos después de la actualización */
            } else {
                Swal.fire("Error", "Hubo un problema al actualizar el usuario", "error");
            }
        } catch (error) {
            console.error("Error al actualizar el usuario:", error);
        }
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setUsuarioSeleccionado((prevUsuario) => ({
            ...prevUsuario,
            [id]: value
        }));
    };

    return (
        <div id="GestionUsuCont">
            <div id="ContFormulario">
                <label htmlFor="InputNombre">Nombre:</label><br />
                <input id="InputNombre" type="text" placeholder="Ingrese su Nombre" defaultValue={usuarioSeleccionado?.nombre || ""} onChange={handleInputChange}/>
                <label htmlFor="InputEmail">Email:</label><br />
                <input id="InputEmail" type="text" placeholder="Ingrese su Email" defaultValue={usuarioSeleccionado?.email || ""} onChange={handleInputChange}/><br />
                <label htmlFor="InputPassword">Contraseña:</label><br />
                <input id="InputPassword" type="text" placeholder="Ingrese su Contraseña" defaultValue={usuarioSeleccionado?.password || ""} onChange={handleInputChange}/>
                <label htmlFor="InputDireccion">Dirección:</label><br />
                <input id="InputDireccion" type="text" placeholder="Ingrese su Direccion" defaultValue={usuarioSeleccionado?.direccion || ""} onChange={handleInputChange}/>
            </div>
            <div id="ContainerTabla">
                <h1 id="TituloGestionUsu">GESTION DE USUARIOS</h1>
                <div id="ContainerBtn">
                    <button id="MostrarTablaTrabajador" onClick={obtenerDatos}>Mostrar Tabla</button><br /><br />
                    <br />
                    <button id="EliminarTrabajador" onClick={eliminarTrabajador}>Eliminar Usuario</button><br /><br />
                    <br />
                    <button id="ActualizarUsuario" onClick={actualizarUsuario}>Actualizar Usuario</button><br /><br />
                    <br />
                    <button id="AgregarUsu" onClick={agregarUsuario}>Agregar Usuario</button>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <table id="TablaUsuarios">
                    <thead>
                        <tr>
                            <th>✔</th>
                            <th>ID</th>
                            <th>ROL</th>
                            <th>Nombre</th>
                            <th>EMAIL</th>
                            <th>PASSWORD</th>
                            <th>DIRECCION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Mostrar &&
                            dato.map((Usuarios) => (
                                <tr key={Usuarios.id}>
                                    <td>
                                        <input
                                            type="checkbox"
                                            checked={seleccionadosTrabajadores.includes(Usuarios.id)}
                                            onChange={() => manejarSeleccionTrabajadores(Usuarios.id)}
                                        />
                                    </td>
                                    <td>{Usuarios.id}</td>
                                    <td>{Usuarios.rol}</td>
                                    <td>{Usuarios.nombre}</td>
                                    <td>{Usuarios.email}</td>
                                    <td>{Usuarios.password}</td>
                                    <td>{Usuarios.direccion}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
            <br />
        </div>
    );
}

export default TablaUsuarios;
