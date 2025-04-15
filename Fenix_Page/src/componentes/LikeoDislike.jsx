import React, { useState, useEffect } from 'react';
import { ThumbsUp, ThumbsDown } from 'lucide-react';
import "../style/LikeDisLikeStyle.css"

function LikeoDislike() {
    // Obtener valores almacenados o establecer en 0
    const [likes, setLikes] = useState(() => parseInt(localStorage.getItem('likes')) || 0);
    const [dislikes, setDislikes] = useState(() => parseInt(localStorage.getItem('dislikes')) || 0);

    // Actualizar localStorage cuando cambian los valores
    useEffect(() => {
        localStorage.setItem('likes', likes);
    }, [likes]);

    useEffect(() => {
        localStorage.setItem('dislikes', dislikes);
    }, [dislikes]);

    return (
        <div id='ContenedorLikeDisLike'>
            <div id='ContTitulosLikeDisLike'>
                <h1 id='T1Like'>TE GUSTO NUESTRO SERVICIO</h1>
                <h2 id='T2Like'>APOYANOS CON UN LIKE</h2>
            </div>
            <br />
            <div id='ContTextLD'>
                <p id='TextLike'>Estamos interesados en mejorar tu experiencia como usuario</p>
                <p id='TextDisLike'>Dan un like si te ha gustado nuestra atención y servicio</p>
            </div>
            <div id='ContBTNS'>
                <div>
                    <button id='BtnLike' onClick={() => setLikes(likes + 1)}><ThumbsUp /> Like </button>
                </div>
                <div>
                    <button id='BtnDislike' onClick={() => setDislikes(dislikes + 1)}> <ThumbsDown /> Dislike </button>
                </div>
            </div>
        </div>
    );
}

export default LikeoDislike;
