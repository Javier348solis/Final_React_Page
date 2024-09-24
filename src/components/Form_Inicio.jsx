import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { obtenerUsuario } from '../services/fetch';
import '../styles/Inicio.css';
import Modal from './Modal';

function Form_Inicio({ setIsAuthenticated }) {
  const [lista, setLista] = useState([]);
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const users = await obtenerUsuario("users");
    const user = users.find(user => user.email === correo && user.password === password);

    if (!user) {
      setErrorMessage("Usuario o contraseña incorrectos");
      return;
    }

    if (user.type === "propietario") {
      setModalVisible(true);
      alert("Bienvenido, Administrador!");
      localStorage.setItem("admin", true);
    } else {
      alert("Bienvenido, Cliente!");
      localStorage.setItem("idUsuario", user.id);
      setIsAuthenticated(true);
    }
    
    navigate("/Home");
  };

  useEffect(() => {
    async function obtenerDatos() {
      const datos = await obtenerUsuario("users");
      setLista(datos);
    }
    obtenerDatos();
  }, []);

  const validarInputs = async () => {
    setErrorMessage(""); // Reiniciar mensaje de error
    if (!correo || !password) {
      setErrorMessage("Por favor, completa todos los campos.");
      return;
    }
    await handleLogin();
  };

  return (
    <>
      <div className='Contenedor-principal'>
        <h1 className='Titu'>Log-In</h1>
        <input
          onChange={(e) => setCorreo(e.target.value)}
          type="text"
          placeholder='Correo electrónico'
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder='Contraseña'
        />
        {errorMessage && <div className="error">{errorMessage}</div>}
        <button className='botonci' onClick={validarInputs}>Ingresar</button>
      </div>
      {modalVisible && <Modal productos={[] /* Asegúrate de pasar productos relevantes aquí */} />}
    </>
  );
}

export default Form_Inicio;
