import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../style/ContactStyle.css'

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
        .sendForm('service_y78em1o', 'template_sodoeyj', form.current, {
            publicKey: 'RyljN1_ngdQ81QE0H',
        })
        .then(
            () => {
            console.log('SUCCESS!');
            },
            (error) => {
            console.log('FAILED...', error.text);
            },
        );
    };

    return (
        <div id='padre'>
            <div id='ContainerFormContact'>
                <form id='Formcontact' ref={form} onSubmit={sendEmail}>
                    <div id="hijo">
                        <label id='LabelContact'>Name</label><br />
                        <input id='InputContactName' type="text" name="user_name" placeholder='Ingrese su nombre'/>
                        <label id='LabelContact'>Email</label><br />
                        <input id='InputContactEmail' type="email" name="user_email" placeholder='Ingrese su correo electronico'/>
                    </div>
                    <label id='LabelContact'>Message</label><br />
                    <textarea name="message" placeholder='Mensaje'/>
                    
                    <input type="submit" value="Send" id='BtnSubmit' />
                </form>
            </div>
            
        </div>
    );
};

export default ContactUs