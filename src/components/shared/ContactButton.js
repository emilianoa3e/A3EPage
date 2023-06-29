import React, {useState} from 'react'
import {MdCall, MdMessage, MdWhatsapp} from 'react-icons/md';

function ContactButton() {
    const [mostrarBotones, setMostrarBotones] = useState(false);

    const toggleBotones = () => {
        setMostrarBotones(!mostrarBotones);
    };
    return (
        <>
                {mostrarBotones && (
                    <div >
                        <a
                            style={{
                                cursor: 'pointer',
                                display: 'flex',
                                borderRadius: '10px',
                                backgroundColor: 'red',
                                backgroundSize: '50%',
                                position: 'fixed',
                                bottom: '130px',
                                right: '30px',
                                boxShadow: '0px 3px 12px rgba(0,0,0,0.25)'
                            }}
                            href="https://api.whatsapp.com/send?phone=123456789"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <MdWhatsapp style={{color: 'white', fontSize: '30px', margin: '5px'}}/>
                        </a>
                        <a
                            style={{
                                cursor: 'pointer',
                                display: 'flex',
                                borderRadius: '10px',
                                backgroundColor: 'red',
                                backgroundSize: '50%',
                                position: 'fixed',
                                bottom: '80px',
                                right: '30px',
                                boxShadow: '0px 3px 12px rgba(0,0,0,0.25)'
                            }}
                            href="tel:123456789"
                        >
                            <MdCall style={{color: 'white', fontSize: '30px', margin: '5px'}}/>
                        </a>
                    </div>
                )}
                <a onClick={toggleBotones} style={{
                    cursor: 'pointer',
                    display: 'flex',
                    borderRadius: '10px',
                    backgroundColor: 'red',
                    backgroundSize: '50%',
                    position: 'fixed',
                    bottom: '30px',
                    right: '30px',
                    boxShadow: '0px 3px 12px rgba(0,0,0,0.25)'
                }}
                >
                    <MdMessage style={{color: 'white', fontSize: '30px', margin: '5px'}}/>
                </a>

            </>
            );
            }

            export default ContactButton