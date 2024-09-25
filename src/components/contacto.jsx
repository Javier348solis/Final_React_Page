import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/contacto.css'
import Navbar from './Navbar';

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.send('service_mwkdtv8', 'template_e2yr83r', formData, 'HowEthmonDVO_H_xp')
      .then((response) => {
        console.log('Email successfully sent!', response.status, response.text);
      })
      .catch((err) => {
        console.error('Failed to send email. Error:', err);
      });
  };
  <Navbar/>
  return (
  
    <form className='contenedor' onSubmit={sendEmail}>
      <h1 className='titulo'>Formulario Contacto</h1>
      <input 
      className='input-name'
        type="text" 
        name="name" 
        placeholder="Nombre Completo" 
        value={formData.name} 
        onChange={handleChange} 
        required 
      />
      <input 
      className='input-correo'
        type="email" 
        name="email" 
        placeholder="Correo electronico" 
        value={formData.email} 
        onChange={handleChange} 
        required 
      />
      <textarea 
      className='espacio-message'
        name="message" 
        placeholder="Mensaje" 
        value={formData.message} 
        onChange={handleChange} 
        required 
      />
      <button className='boton-form' type="submit">Enviar</button>
    </form>
  );
};

export default Contacto;
