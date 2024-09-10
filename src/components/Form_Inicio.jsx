import React from 'react'
import '../styles/Inicio.css'

function Form_Inicio() {
  return (
    <div className='contenedor-inicio'>
      <input className='' type="email" id="" placeholder='Correo'/>
      <input type="password" id="" placeholder='Contraseña'/>
      <button className='boton-inicio' type="submit">Ingresar</button>
    </div>
  )
}

export default Form_Inicio
