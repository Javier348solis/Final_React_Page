import React from 'react'
import '../styles/contacto.css'
import { useEffect, useState } from 'react'

function contacto() {
  return (
    <div className='contenedor-contacto'>
      <input type="email" className=''/>
      <input type="number" className=''/>
      <input type="text " className=''/>
      <button className='boton-contacto' type="submit">Enviar mensaje</button>
    </div>
  )
}

export default contacto
