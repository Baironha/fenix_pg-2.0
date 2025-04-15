import React, { useState, useEffect, useCallback } from "react";
import Swal from "sweetalert2"; // Importa SweetAlert
import '../style/tablatrabajador.css';

function TablaUsuarios() {
    
    const [datos, setDatos] = useState([]);
    const [mostrar, setMostrar] = useState(false);
    const [seleccionados, setSeleccionados] = useState([]);
    const [trabajadorSeleccionado, setTrabajadorSeleccionado] = useState(null); /*  Trabajador actualmente seleccionado */

    /* Estado para los valores del formulario */
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        password: "",
        direccion: "",
        salario: "",
    });

    /* Actualiza el estado del formulario */
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));
    };

    /* Función para limpiar los campos del formulario */
    const limpiarFormulario = () => {
        setFormData({
            nombre: "",
            email: "",
            password: "",
            direccion: "",
            salario: "",
        });
    };

    /* Función para obtener los datos de los trabajadores desde la API */
    const obtenerDatos = useCallback(async () => {
        try {
            const response = await fetch("http://localhost:3001/trabajadores");
            const data = await response.json();
            setDatos(data);
            setMostrar(true);
            limpiarFormulario(); // Limpiar los campos del formulario
        } catch (error) {
            console.error("Error al obtener los datos:", error);
        }
    }, []);

    /*  Llamada a obtener los datos cuando el componente se monta */
    useEffect(() => {
        obtenerDatos();
    }, [obtenerDatos]);

    //* Función para agregar un trabajador */
    const agregarTrabajador = async () => {
        if (Object.values(formData).every((field) => field.trim() !== "")) {
            const nuevoUsuario = { rol: "Admin", ...formData };

            try {
                const response = await fetch("http://localhost:3001/trabajadores", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(nuevoUsuario),
                });

                if (response.ok) {
                    Swal.fire("¡Éxito!", "Usuario agregado con éxito", "success");
                    obtenerDatos(); // Actualizar la tabla
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

    /* Función para seleccionar trabajadores */
    const manejarSeleccionTrabajadores = (id) => {
        setSeleccionados((prevSeleccionados) =>
            prevSeleccionados.includes(id)
                ? prevSeleccionados.filter((item) => item !== id)
                : [...prevSeleccionados, id]
        );
        /*  Si se selecciona un trabajador, cargar su información en el formulario */
        const trabajador = datos.find((usuario) => usuario.id === id);
        setTrabajadorSeleccionado(trabajador);
        setFormData({
            nombre: trabajador?.nombre || "",
            email: trabajador?.email || "",
            password: trabajador?.password || "",
            direccion: trabajador?.direccion || "",
            salario: trabajador?.salario || "",
        });
    };

    /* Función para eliminar trabajadores seleccionados */
    const eliminarTrabajador = async () => {
        try {
            for (let id of seleccionados) {
                await fetch(`http://localhost:3001/trabajadores/${id}`, { method: "DELETE" });
            }
            setDatos((prevDatos) =>
                prevDatos.filter((usuario) => !seleccionados.includes(usuario.id))
            );
            setSeleccionados([]);
        } catch (error) {
            console.error("Error al eliminar trabajador:", error);
        }
        limpiarFormulario(); /* Limpiar el formulario después de eliminar */
    };

    /* Función para actualizar los datos de un trabajador */
    const actualizarTrabajador = async () => {
        if (!trabajadorSeleccionado) return;

        const updatedUser = { ...trabajadorSeleccionado, ...formData };

        try {
            const response = await fetch(
                `http://localhost:3001/trabajadores/${trabajadorSeleccionado.id}`,
                {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(updatedUser),
                }
            );

            if (response.ok) {
                Swal.fire("¡Éxito!", "Usuario actualizado con éxito", "success");
                obtenerDatos(); /* Actualizar la tabla */
            } else {
                Swal.fire("Error", "Hubo un problema al actualizar el usuario", "error");
            }
        } catch (error) {
            console.error("Error al actualizar usuario:", error);
        }
        limpiarFormulario(); /* Limpiar el formulario después de actualizar */
    };

    return (
        <div>
            <div id="ContFormulario">
                {/* Inputs del formulario */}
                {["nombre", "email", "password", "direccion", "salario"].map((field) => (
                    <div key={field}>
                        <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}:</label><br />
                        <input id={field} type="text" placeholder={`Ingrese su ${field}`} value={formData[field]} onChange={handleInputChange} />
                    </div>
                ))}
            </div>

            <div id="ContainerTabla">
                <h1 id="TituloGestionUsu">GESTIÓN DE TRABAJADORES</h1>
                <div id="ContainerBtn">
                    <button id="MostrarTablaTrabajador" onClick={obtenerDatos}>Mostrar Tabla</button><br /><br />
                    <button id="EliminarTrabajador" onClick={eliminarTrabajador}>Eliminar Trabajador</button><br /><br />
                    <button id="Actualizartrabajador" onClick={actualizarTrabajador}>Actualizar Trabajador</button><br /><br />
                    <button id="Agregartrabajador" onClick={agregarTrabajador}>Agregar Trabajador</button>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <table id="Tablatrabajador">
                    <thead>
                        <tr>
                            <th>✔</th>
                            <th>ID</th>
                            <th>ROL</th>
                            <th>Nombre</th>
                            <th>EMAIL</th>
                            <th>PASSWORD</th>
                            <th>DIRECCIÓN</th>
                            <th>SALARIO</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mostrar && datos.map((trabajador) => (
                            <tr key={trabajador.id}>
                                <td>
                                    <input
                                        type="checkbox"
                                        checked={seleccionados.includes(trabajador.id)}
                                        onChange={() => manejarSeleccionTrabajadores(trabajador.id)}
                                    />
                                </td>
                                <td>{trabajador.id}</td>
                                <td>{trabajador.rol}</td>
                                <td>{trabajador.nombre}</td>
                                <td>{trabajador.email}</td>
                                <td>{trabajador.password}</td>
                                <td>{trabajador.direccion}</td>
                                <td>{trabajador.salario}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TablaUsuarios;
