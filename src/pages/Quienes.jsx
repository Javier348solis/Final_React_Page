import React from 'react';
import '../styles/quienes.css'

const Quienes = () => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button">✖️</button>
        <h1>Reseña</h1>
        <p>
         K&B es una venta de productos de tecnologia que nacio en Perez Zeledon, nuestro emprendimiento se creo en 2022, y hasta el dia de hoy <br /> nos hemos consolidado 
         como una tienda confiable y la preferida por la mayoria de pezeteños y otras personas alrededor del pais
        </p>
      </div>
    </div>
  );
};

export default Quienes;
