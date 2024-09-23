import React, { useEffect, useState } from 'react';
import '../styles/paginaPri.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [items.length]);

  const imganterior = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const imgposterior = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="contenedor-carrusel">
      <Navbar />
      <div className="vuelta-carrusel" style={{ transform: `translateX(-${currentIndex * 100}%)`, transition: 'transform 0.5s ease' }}>
        {items.map((item, index) => (
          <div key={index} className="carousel-item">
            <img src={item.image} alt={`Slide ${index}`} className="imagen-carrusel" />
            <div className="informacion-carrusel">
              <h3>{item.title}</h3>
              <p className='letra'>{item.description}</p>
              <p className="precio">₡{item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-button prev" onClick={imganterior}>Prev</button>
      <button className="carousel-button next" onClick={imgposterior}>Next</button>
      <Footer />
    </div>
  );
};


const PaginaPrincipal = () => {
  const items = [
    {
      image: 'https://extremetechcr.com/tienda/18931-large_default/razer-basilisk-v3.jpg',
      title: 'Producto 1',
      description: 'Mouse Razer 12.000 PSI',
      price: '20.000',
    },
    {
      image: 'https://extremetechcr.com/tienda/20939-large_default/steelseries-apex-3-tkl-ingles.jpg',
      title: 'Producto 2',
      description: 'Mouse Apex 14.000 PSI',
      price: '25.000',
    },
    {
      image: 'https://extremetechcr.com/tienda/28006-large_default/razer-huntsman-mini-60-switch-purple-espanol.jpg',
      title: 'Producto 3',
      description: 'Teclado Razer',
      price: '19.000',
    },
    {
      image: 'https://extremetechcr.com/tienda/38486-large_default/parlante-portatil-sony-bluetooth-negro-srs-xb100.jpg',
      title: 'Producto 4',
      description: 'Parlante Sony',
      price: '27.500',
    },
    {
      image: 'https://extremetechcr.com/tienda/29955-large_default/primus-darth-vader-arcus-110t-phs-s110dv.jpg',
      title: 'Producto 5',
      description: 'Headset Primus',
      price: '15.000',
    },
    {
      image: 'https://extremetechcr.com/tienda/35100-large_default/webcam-klip-extreme-laguham-1080p-kwc-500.jpg',
      title: 'Producto 6',
      description: 'Cam web klip',
      price: '11.000',
    },
  ];

  return (
    <div>
      <h1>Carrusel de Productos</h1>
      <Carousel items={items}/>
    </div>
  );
};

export default PaginaPrincipal;
