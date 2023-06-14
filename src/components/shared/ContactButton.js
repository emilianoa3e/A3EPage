import React from 'react'
import { useState } from 'react';
import '../../assets/css/components/ContactButton.css'
import { MdWhatsapp, MdCall, MdMessage } from 'react-icons/md';

function ContactButton() {
    const [mostrarBotones, setMostrarBotones] = useState(false);

    const toggleBotones = () => {
        setMostrarBotones(!mostrarBotones);
    };
    return (
        <div className='contenedor'>
            <button className="boton-flotante center" onClick={toggleBotones}>
                <MdMessage />  Contactanos
            </button>
            {mostrarBotones && (
                <div className='botones-adicionales'>
                    <a href='https://api.whatsapp.com/send?phone=5217772604715' className='boton-redondo'><MdWhatsapp width={'2rem'} /></a>
                    <a className='boton-redondo'><MdCall width='2rem' /></a>
                    
                </div>
            )}

        </div>
       
    );
}

export default ContactButton