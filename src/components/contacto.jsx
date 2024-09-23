import React, { useState } from 'react';
import emailjs from 'emailjs-com';

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

  return (
    <form onSubmit={sendEmail}>
      <input 
        type="text" 
        name="name" 
        placeholder="Nombre Completo" 
        value={formData.name} 
        onChange={handleChange} 
        required 
      />
      <input 
        type="email" 
        name="email" 
        placeholder="Correo electronico" 
        value={formData.email} 
        onChange={handleChange} 
        required 
      />
      <textarea 
        name="message" 
        placeholder="Mensaje" 
        value={formData.message} 
        onChange={handleChange} 
        required 
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Contacto;
