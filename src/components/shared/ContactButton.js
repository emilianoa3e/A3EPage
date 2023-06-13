import React from 'react'
import { useState } from 'react';
import '../../assets/css/components/ContactButton.css'
import { MdWhatsapp, MdCall, MdMessage } from 'react-icons/md';

function ContactButton() {
    const [mostrarBotones, setMostrarBotones] = useState(false);

    const toggleBotones = () => {
        setMostrarBotones(!mostrarBotones);
    };
    console.log(mostrarBotones)
    return (
        <div className="container-fluid">
            <button className="boton-flotante center" onClick={toggleBotones}>
            <MdMessage />  Contactanos 
            </button>
            {mostrarBotones && (
                <div className="botones-adicionales">
                    <button className="boton-redondo"><MdWhatsapp width={'2rem'} /></button>
                    <button className="boton-redondo"><MdCall width='2rem'/></button>
                </div> 
            )}
        </div>
    );
}

export default ContactButton