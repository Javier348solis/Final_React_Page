import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { obtenerUsuario } from '../services/fetch';
 import '../styles/Inicio.css';
import Modal from './Modal';
import Swal from 'sweetalert2'
import '../styles/Inicio.css'

//Utilizamos el useState para actualizar y brindar un estado nuevo o datos nuevos 
function Form_Inicio({ setIsAuthenticated }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [datos, setDatos] = useState([]);
  const navegarWeb = useNavigate();

  //se obtiene los datos con una funcion asincrona y se espera la respuesta con el await
  useEffect(() => {
    const getUsers = async () => {
      const dataUsuarios = await obtenerUsuario("users");
      setDatos(dataUsuarios);
    };
    getUsers();
  }, []);
//Validacion de espacios vacios
  const validacionUsuario = () => {
    if (!email || !password) {
    
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Por favor, llene todos los espacios",
        showConfirmButton: false,
        timer: 3000
      });
      return;
    }
//se recorre con un punto find para buscar o iterar la API y asi ingresar al home
    const user = datos.find((usuario) => usuario.email === email && usuario.password === password);
    if (user) {
      setIsAuthenticated(true);  
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Bienvenido",
        showConfirmButton: false,
        timer: 3000
      });
      navegarWeb("/home");
    } else {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Datos incorrectos",
        showConfirmButton: false,
        timer: 3000
      });
    }
  };

  return (
    <div className='contenedor-inicio'>
      <h1 className='Titulo'>Iniciar Sesión</h1>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className='espacio-correo'
        type="email"
        placeholder='Correo'
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className='espacio-contra'
        type="password"
        placeholder='Contraseña'
      />
      <button onClick={validacionUsuario} className='botoncito' type="button">Iniciar Sesión</button>
      <div className='login-link'>
        
      </div>
    </div>
  );
}
export default Form_Inicio