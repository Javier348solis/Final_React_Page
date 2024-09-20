import React from 'react';
import '../styles/Navbar.css';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const rutas = useNavigate()

 function paginaCel() {
  rutas('/Artcelular')
 }
 function paginaCom() {
  rutas('/Artcomputadoras')
 }
 function paginaOtros() {
  rutas('/Promociones')
 }
 function paginaWatches() {
  rutas('/Relojes')
 }
 function paginaPrincipal() {
  rutas('/Home')
 }

  const toggleMenu = () => {
    document.body.classList.toggle("open");
  }

  return ( 
    <nav className="navbar">
      <button onClick={toggleMenu} className="boton-Menu">
        {/* Texto del botón (si es necesario) */}
       <img src="src/Img/K.gif" alt="" />
      </button>
      <button className="boton-home">Home</button>
      <div className="dropdowns">
        <div className="dropdown">
          <button className="boton-services">Servicios</button>
          <div className="dropdown-menu">
            <button onClick={paginaCel}>Articulos celular</button>
            <button onClick={paginaCom}>Articulos computadora</button>
            <button onClick={paginaWatches}>Relojes inteligentes</button>
            <button onClick={paginaOtros}>Otros</button>
            <button onClick={paginaPrincipal}>Volver</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar
