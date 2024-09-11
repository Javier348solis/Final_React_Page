import React from 'react'
import '../styles/Inicio.css'

function Form_Inicio() {
  return (
    <div className='contenedor-inicio'>
      <h1 className='Titu'>Inicio de sesion</h1>
      <input className='espacio-email' type="email" id="" placeholder='Correo'/>
      <input className='espacio-pass' type="password" id="" placeholder='Contraseña'/>
      <button className='boton-inicio' type="submit">Ingresar</button>
    </div>
  )
}

export default Form_Inicio
