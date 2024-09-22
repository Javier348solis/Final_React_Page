import React from 'react';
import Navbar from '../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles/paginaPri.css'

function Paginaprincipal() {
  return (
    <div>
      <Navbar />
      <div className="carousel-container" style={{ marginTop: '20px' }}> {/* Ajusta el valor según necesites */}
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-interval="4000">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="src/Img/img relojes/WhatsApp Image 2024-09-09 at 10.58.38 AM.jpeg" className="d-block w-100" alt="Reloj inteligente" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Reloj inteligente</h5>
                <p>₡20.000 (Incluye audífonos)</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="src/Img/img otros/WhatsApp Image 2024-09-09 at 10.58.55 AM.jpeg" className="d-block w-100" alt="Parlante con audífonos T&G" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Parlante con audífonos T&G</h5>
                <p>₡25.000 (Incluye cargador tipo C)</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="src/Img/img celulares/WhatsApp Image 2024-09-09 at 10.58.11 AM.jpeg" className="d-block w-100" alt="Conjunto de cables tipo C" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Conjunto de cables tipo C charging</h5>
                <p>₡7.000 (Garantía: 2 meses)</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Paginaprincipal;

