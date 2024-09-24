import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { obtenerUsuario } from '../services/fetch';
import '../styles/Inicio.css';
import AutenModal from './AutenModal';

function Form_Inicio({ setIsAuthenticated }) {
  const [lista, setLista] = useState([]);
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function obtenerDatos() {
      const datos = await obtenerUsuario("users");
      setLista(datos);
    }
    obtenerDatos();
  }, []);

  const validarInputs = () => {
    const user = lista.find(users => users.email === correo && users.password === password);
    
    if (user) {
      if (user.type === 'propietario') {
        alert("Bienvenido, Administrador!");
        localStorage.setItem("admin", true);
        localStorage.setItem("idUsuario", user.id); 
        setIsAuthenticated(true); 
        handleLogin('propietario'); 
        navigate("/admin");
      } else {
        alert("Bienvenido, Cliente!");
        localStorage.setItem("idUsuario", user.id);
        setIsAuthenticated(true);
        navigate("/Home");
      }
    } else {
      alert("Datos incorrectos");
    }
  };
  
  

  return (
    <div className='Contenedor-principal'>
      <h1 className='Titu'>Log-In</h1>
      <input onChange={(e) => { setCorreo(e.target.value); }} type="text" placeholder='Correo electrónico' />
      <input onChange={(e) => { setPassword(e.target.value); }} type="password" placeholder='Contraseña' />
      <button className='botonci' onClick={validarInputs}>Ingresar</button>
    </div>
  );
}

export default Form_Inicio;

