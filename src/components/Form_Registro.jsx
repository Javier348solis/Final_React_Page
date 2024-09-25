import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/registro.css';
import { obtenerUsuario, guardarUsuario } from '../services/fetch';
import Swal from 'sweetalert2'

//Esta parte es que maneja los estados de la informacion que voy a guardar en mi post o almacenar para luego obtener  
function Form_Registro() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('cliente'); 
  const [datos, setDatos] = useState([]);
  const navegarWeb = useNavigate();

//Aqui cree un useEffcet para renderizar los datos, cuando se encuntran dependencias se va a correr cuando esas dependencias cambien o se actualicen
  useEffect(() => {
    const getUsers = async () => {
      const dataUsuarios = await obtenerUsuario("users");
      setDatos(dataUsuarios);//Setea los datos o re-renderiza
    };
    getUsers();//Esta parte llama a la funcion y obtiene los datos, solo espera a qque los datos se rendericen los datos de componente
  }, []);

  //Se crea una funcion asincrona donde se van a validar los espacios vacios y que tire una alerta
  const validacionUsuario = async () => {
    if (!userName || !email || !password) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Por favor, llene todos los espacios",
        showConfirmButton: false,
        timer: 3000
      });
      return;
      //Esta parte valida si el usuario ya esta registrado, si ya esta te va a tirar una alerta
    } else {
      const user = datos.find((usuario) => usuario.email === email);
      if (user) {
Swal.fire({
  position: "top-end",
  icon: "alert",
  title: "El usuario ya esta registrado",
  showConfirmButton: false,
  timer: 3000
});
//Si no esta registrado se va a guardar en la API de essta forma
      } else {
        let usuario = {
          name: userName,
          email: email,
          password: password,
          type: userType 
        };
        await guardarUsuario(usuario, "users");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Usuario registrado con exito",
          showConfirmButton: false,
          timer: 3000
        });
        navegarWeb("/Inicio");//Navega al login
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

      <div className='login-link'>
        <p className='Direccion-login'>¿Ya tienes una cuenta? <Link to="/Inicio" className='color-link'>Inicia sesión aquí</Link></p>
      </div>
    </div>
  );
}

export default Form_Registro;
