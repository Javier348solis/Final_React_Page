import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Importa Link y useNavigate
import '../styles/Footer.css';

function Footer() {
  const navigate = useNavigate(); // Llama a useNavigate aquí

  const openModal = () => {
    
    console.log("Modal abierto");
  };

  return (
    <div>
      <footer className='footer-cont'>
        <span className="titulo-footer">Pagina</span>
        <ul className="Redes">
          <li><a href="#"><i className="im-facebook"></i></a></li>
          <li><a href="#"><i className="im-WhatsApp"></i></a></li>
          <li><a href="#"><i className="im-Telegram"></i></a></li>
        </ul>
        <div className="info">
          <ul>
            <li className="footer-lista">Informacion</li>
            <li>
              <Link to="#" onClick={(e) => { e.preventDefault(); openModal(); }}>
                Acerca de Nosotros
              </Link>
            </li>
            <li>
              <Link to="/Ubicacion">Ubicacion</Link>
            </li>
            <li>
              <Link to="/FormContacto">Contacto</Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

