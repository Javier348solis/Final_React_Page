import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/registro.css';
import { obtenerUsuario, guardarUsuario } from '../services/fetch';

function Form_Registro() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('cliente'); 
  const [datos, setDatos] = useState([]);
  const navegarWeb = useNavigate();

  useEffect(() => {
    const getUsers = async () => {
      const dataUsuarios = await obtenerUsuario("users");
      setDatos(dataUsuarios);
    };
    getUsers();
  }, []);

  const validacionUsuario = async () => {
    if (!userName || !email || !password) {
      alert("Por favor, llene todos los espacios");
      return;
    } else {
      const user = datos.find((usuario) => usuario.email === email);
      if (user) {
        alert("El usuario ya existe");
      } else {
        let usuario = {
          name: userName,
          email: email,
          password: password,
          type: userType 
        };
        await guardarUsuario(usuario, "users");
        navegarWeb("/Inicio");
      }
    }
  };

  return (
    <div className='contenedor-registro'>
      <h1 className='Titulo'>Registro</h1>
      <input
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        className='espacio-nombre'
        type="text"
        placeholder='Nombre'
      />
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
      
     
      <div className='tipo-usuario'>
        <label>
          <input
            type="radio"
            value="cliente"
            checked={userType === 'cliente'}
            onChange={(e) => setUserType(e.target.value)}
          />
          Cliente
        </label>
        <label>
          <input
            type="radio"
            value="propietario"
            checked={userType === 'propietario'}
            onChange={(e) => setUserType(e.target.value)}
          />
          Administrador
        </label>
      </div>

      <button onClick={validacionUsuario} className='botoncito' type="submit">Registrarse</button>
    </div>
  );
}

export default Form_Registro;
