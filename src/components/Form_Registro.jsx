import React from 'react'
import '../styles/registro.css'

function Form_Registro() {
  const Register = =>{
    
  }
  return (
    <div className='contenedor-registro'>
      <h1 className='Titulo'>Registro</h1>
      <input className='espacio-nombre' type="text" placeholder='Nombre'/>
      <input className='espacio-correo' type="email" id="" placeholder='Correo'/>
      <input className='espacio-contra' type="password" id="" placeholder='Contraseña'/>
      <button className='botoncito' type="submit">Registrarse</button>
    </div>
  )
}

export default Form_Registro
