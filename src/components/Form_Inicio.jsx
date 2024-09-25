import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { obtenerUsuario } from '../services/fetch';
 import '../styles/Inicio.css';
import Modal from './Modal';
import Swal from 'sweetalert2'
import '../styles/Inicio.css'

function Form_Inicio({ setIsAuthenticated }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [datos, setDatos] = useState([]);
  const navegarWeb = useNavigate();

  useEffect(() => {
    const getUsers = async () => {
      const dataUsuarios = await obtenerUsuario("users");
      setDatos(dataUsuarios);
    };
    getUsers();
  }, []);

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
        {/* <p className='Direccion-login'>¿No tienes una cuenta? <Link to="/" className='color-link'>Regístrate aquí</Link></p> */}
      </div>
    </div>
  );
}
export default Form_Inicio