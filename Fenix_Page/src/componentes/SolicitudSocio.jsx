import React, { useState, useRef } from "react";
import '../style/SoliSocio.css';
import Swal from 'sweetalert2';
/* import AWS from 'aws-sdk'; */
import conexiones from "../Servicios/conexiones";
import KAWS from "../componentes/KAWS";

function SolicitudSocio() {
    const [NombreSocio, SetNombreSocio] = useState("");
    const [EmailSocio, SetEmailSocio] = useState("");
    const [TelSocio, SetTelSocio] = useState("");
    const [ProyectoSocio, SetProyectoSocio] = useState("");
    const [DescripcionProyecto, setDescripcionProyecto] = useState("")
    const [PdfProyectoSocio, setPdfProyectoSocio]= useState(null);

    /* ref para hacer referencia al input de PDF */
    const pdfInputRef = useRef(null);

    const S3_BUCKET = 'bucketbyronimg';
    const REGION = 'us-east-2';

    const s3 = KAWS.amazon()

    const uploadPdfToS3 = async (file) => {
        const params = {
            Bucket: S3_BUCKET,
            Key: file.name,
            Body: file,
            ContentType: file.type,
        };

        return s3.upload(params).promise();
    };

    function nombreS(evento) {
        SetNombreSocio(evento.target.value);
    }

    function emailS(evento) {
        SetEmailSocio(evento.target.value);
    }

    function telS(evento) {
        SetTelSocio(evento.target.value);
    }

    function proyectS (evento) {
        SetProyectoSocio(evento.target.value);
    }

    function DescripcionP (evento){
        setDescripcionProyecto(evento.target.value)
    }

    function PDFProyecto(evento){
        setPdfProyectoSocio(evento.target.files[0]);
    }

    function BtnEnviarSolicitud() {
        if (NombreSocio === "" || EmailSocio === "" || TelSocio === "" || ProyectoSocio === "" || DescripcionProyecto === "" || !PdfProyectoSocio) {
            Swal.fire({
                icon: "error",
                title: "Campos incompletos",
                text: "Por favor rellene los espacios!",
            });
        } else {
            uploadPdfToS3(PdfProyectoSocio)
                .then((result) => {
                    const pdfUrl = result.Location;
                    console.log(pdfUrl);
                    /* acción de registrar los datos junto con la URL del PDF */
                    sendRequest(pdfUrl);
                })
                .catch((error) => {
                    Swal.fire({
                        icon: "error",
                        title: "Error al subir el PDF",
                        text: "Hubo un problema al subir el PDF. Intente nuevamente.",
                    });
                    console.error("Error al subir el PDF:", error);
                });
        }
    }

    const sendRequest = (url) => {
        conexiones.postUsers(NombreSocio, EmailSocio, TelSocio, ProyectoSocio, DescripcionProyecto, url)
            .then(() => {
                Swal.fire({
                    icon: "success",
                    title: "Registro exitoso",
                    text: "Se ha agregado un nuevo trabajador a la planilla",
                });

                /* vaciar el formulario después del registro exitoso */
                SetNombreSocio("");
                SetEmailSocio("");
                SetTelSocio("");
                SetProyectoSocio("");
                setDescripcionProyecto("");
                setPdfProyectoSocio(null);

                /* impiar el campo de PDF */
                pdfInputRef.current.value = null; /* Limpiar el input de PDF */
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Error en el registro",
                    text: "Hubo un problema al agregar el trabajador. Intente nuevamente.",
                });
                console.error("Error al registrar trabajador:", error);
            });
    };

    return (
        <div>
            <div>
                <h1 id="Titulo1Socio">LISTO PARA ELEVAR TU PROYECTO</h1>
                <h1 id="Titulo2Socio">CONVIÉRTETE EN SOCIO Y SUPERA TUS LÍMITES</h1>
            </div>
            <div id="TextContainer">
                <div id="ContTextoSocios">
                    <p><strong>En Fenix, llevamos tu marca a nuevas alturas. Nuestro equipo de expertos en economía, análisis de datos, desarrollo web y administración de proyectos</strong></p>
                    <p><strong>está listo para ayudarte a conquistar el universo digital</strong></p>
                </div>
            </div>
            <br />
            <div className="contenedor-formulario">
                <div>
                    <input type="text" id="InputNombre" value={NombreSocio} onChange={nombreS} placeholder="Ingrese su nombre completo" />
                    <input type="text" id="InputEmail" value={EmailSocio} onChange={emailS} placeholder="Ingrese su correo electrónico" />
                    <br />
                    <input type="text" id="InputTel" value={TelSocio} onChange={telS} placeholder="Ingrese su número de contacto" />
                    <input type="text" id="InputProyecto" value={ProyectoSocio} onChange={proyectS} placeholder="Nombre del proyecto" />
                    <br />
                </div>
                <input type="text" id="descripcionProyecto" value={DescripcionProyecto} onChange={DescripcionP} placeholder="Ingrese una breve descripción del proyecto" />
                <br />
                <input id="PdfPoryect" type="file" onChange={PDFProyecto} accept="application/pdf" ref={pdfInputRef} />
                <button onClick={BtnEnviarSolicitud} className="btn-enviar">Enviar</button>
            </div>
        </div>
    );
}

export default SolicitudSocio;
