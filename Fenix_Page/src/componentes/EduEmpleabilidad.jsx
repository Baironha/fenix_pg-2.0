import React, { useState, useEffect } from 'react';
import '../style/EmpleabilidadStyle.css';


import PdfSerBuenLider from '../PDF/como ser un buen lider.pdf'
import PdfCrearCv from '../PDF/crear cv.pdf'
import PdfEticaPro from '../PDF/Etica profesional.pdf'
import PdfTecnicasHablarPublico from '../PDF/Tecnicas para hablar en público.pdf'
import PdfPreparacionEntrevistaLaboral from '../PDF/Prepararse para una entrevista laboral.pdf'


function EduDtScients() {
    const [visibleSections, setVisibleSections] = useState({
        SeccionSemana1: false,
        SeccionSemana2: false,
    });

    const toggleSection = (sections) => {
        setVisibleSections((prev) => {
            const newState = { ...prev, [sections]: !prev[sections] };
            return newState;
        });
    };

    useEffect(() => {
        const visibleSection = Object.keys(visibleSections).find(sections => visibleSections[sections]);
        if (visibleSection) {
            document.getElementById(visibleSection)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [visibleSections]);

    return (
        <div className="containeredu">
            <video autoPlay loop muted id="background-videoEmpleabilidad">
                <source src="https://i.gifer.com/4Cb2.mp4" type="video/mp4" />
            </video>
            <div className="cont">
                <h1>EMPLEABILIDAD</h1>
                <div className="section">
                    <p><strong>PROFESOR: BAIRON HORNA ALVAREZ</strong></p>
                    <p><strong>MODALIDAD: VIRTUAL</strong></p>
                    <p><strong>HORARIOS: OPEN</strong></p>
                    <p><strong>AULA: ADMINISTRACIÓN</strong></p>
                    <p><strong>DURACIÓN: 4 semanas</strong></p>
                </div>
                <br />
                {['SeccionSemanas1', 'SeccionSemanas2'].map((sections, index) => (
                    <div key={sections} id={sections} onClick={() => toggleSection(sections)} className="sections">
                        <h2>{`SEMANA ${index + 1}`}</h2>
                        {visibleSections[sections] && (
                            <div>
                                {index === 0 && <>
                                    <div className = "App">
                                        <a href = {PdfCrearCv} target = "_blank">Como crear tu cv</a>
                                    </div>
                                    
                                    <div className = "App">
                                        <a href = {PdfPreparacionEntrevistaLaboral} target = "_blank">Preparase para una entrevista laboral</a>
                                    </div>
                                    <div className = "App">
                                        <a href = {PdfTecnicasHablarPublico} target = "_blank">Tecnicas para hablar en publico</a>
                                    </div>
                                    <iframe 
                                        width="560" 
                                        height="315" 
                                        src="https://www.youtube.com/embed/h6yMeOAhDLc?si=iHREB6G_Ho8Gjfmz" 
                                        title="YouTube video player" 
                                        frameBorder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                        referrerPolicy="strict-origin-when-cross-origin" 
                                        allowFullScreen
                                    ></iframe>
                                    <br />
                                    <iframe 
                                        width="560" 
                                        height="315" 
                                        src="https://www.youtube.com/embed/enx_eZKckXM?si=5Seohax0EDHbCrV2" 
                                        title="YouTube video player" 
                                        frameBorder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                        referrerPolicy="strict-origin-when-cross-origin" 
                                        allowFullScreen
                                    ></iframe>


                                </>}
                                {index === 1 && <>
                                    <div className = "App">
                                        <a href = {PdfEticaPro} target = "_blank">Etica profesional</a>
                                    </div>
                                    
                                    <div className = "App">
                                        <a href = {PdfSerBuenLider} target = "_blank">Como ser un buen lider</a>
                                    </div>
                                    <iframe 
                                        width="560" 
                                        height="315" 
                                        src="https://www.youtube.com/embed/IVSkr6GUHiw?si=5L2f6-w_lN97xzwe" 
                                        title="YouTube video player" 
                                        frameBorder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                        referrerPolicy="strict-origin-when-cross-origin" 
                                        allowFullScreen
                                    ></iframe>
                                    <iframe 
                                        width="560" 
                                        height="315" 
                                        src="https://www.youtube.com/embed/FqGjhXrHLnk?si=9SOlQbBSXg937lBC" 
                                        title="YouTube video player" 
                                        frameBorder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                        referrerPolicy="strict-origin-when-cross-origin" 
                                        allowFullScreen
                                    ></iframe>


                                </>}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default EduDtScients;
