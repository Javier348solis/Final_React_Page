import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { obtenerUsuario } from '../services/fetch';
import '../styles/Inicio.css';
import Modal from './Modal';
function Form_Inicio() {
  const [lista, setLista] = useState([]);
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [productos,setProductos] = useState([])
  const navigate = useNavigate();


  const handleLogin=async()=>{
      const users = await obtenerUsuario("users")
      const userAdmin = users.find(user=>user.email === correo && user.password === password && user.type==="propietario")
      
      if(userAdmin){
        setModalVisible(true)
        alert("propietario")
        localStorage.setItem("admin", true);
        localStorage.setItem("idUsuario", userAdmin.id);
        navigate("/Home")
      }
      else{
        alert("Bienvenido, Cliente!");
        localStorage.setItem("idUsuario", users.id);
        setIsAuthenticated(true);
        navigate("/Home");
      }
    }


  useEffect(() => {
    async function obtenerDatos() {
      const datos = await obtenerUsuario("users");
      setLista(datos);
    }
    obtenerDatos();
  }, []);

  const validarInputs = async() => {
    await handleLogin() 
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
      <button className='botonci' onClick={validarInputs}>Ingresar</button>
    </div>
      {modalVisible &&
        <Modal productos={productos}/>  
      }
    </>
  );
}

export default Form_Inicio;
