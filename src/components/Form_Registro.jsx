import React, { useEffect, useState } from 'react'
import '../styles/registro.css'
import { useNavigate } from 'react-router-dom'

function Form_Registro() {

  const [Nombre, setNombre] = useState('')
  const [Contra, setContra] = useState('')
  const [Correo, setCorreo] = useState('')
  const navegar = useNavigate(

    
  )
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
