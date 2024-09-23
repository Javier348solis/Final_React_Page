import React from 'react'
import '../styles/Footer.css'

function Footer() {
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
          <li className="footer-lista">Ofertas</li>
          <li><a href="#">Productos</a></li>
          <li><a href="#">Servicios</a></li>
          <li><a href="#">Categorias</a></li>
          <li><a href="#">Ayuda</a></li>
        </ul>
        <ul>
          <li className="footer-lista">Informacion</li>
          <li><a href="#">Acerca de nosotros</a></li>
          <li><a href="#">Ubicacion</a></li>
          <li><a href="src/components/contacto.jsx">Contacto</a></li>
        </ul>
      </div>
    </footer>
    </div>
  )
}

export default Footer

