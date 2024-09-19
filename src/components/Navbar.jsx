import React from 'react'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <div>
       const toggleMenu = () => {
    document.body.classList.toggle("open")
  };

  return (
    <nav className="navbar">
      <button onClick={toggleMenu} className="boton-Menu">
        {/* Texto del botón (si es necesario) */}
      </button>
      <button className="boton-home">Home</button>
      <div className="dropdowns">
        <div className="dropdown">
          <button className="boton-services">Servicios</button>
          <div className="dropdown-menu">
            <button>Articulos celular</button>
            <button>Articulos computadora</button>
            <button>Relojes inteligentes</button>
            <button>Otros</button>
          </div>
        </div>
      </div>
    </nav>
  );

    </div>
  )
}

export default Navbar
