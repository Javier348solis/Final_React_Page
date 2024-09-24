import React from 'react';
import '../styles/Modal.css';
import { deleteProduct } from '../services/fetch';

const Modal = ({ productos, onClose, onDelete, onUpdate }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>Cerrar</button>
        <h2>Carrito de Compras</h2>
        {productos.length === 0 ? (
          <p>No hay productos en el carrito.</p>
        ) : (
          <ul>
            {productos.map(producto => (
              <li key={producto.id}>
                <span>{producto.description} - {producto.price} (Cantidad: {producto.cantidad})</span>
                <input
                  type="number"
                  value={producto.cantidad}
                  min="1"
                  onChange={(e) => onUpdate(producto.id, e.target.value)}
                />
                <button onClick={() =>deleteProduct(producto.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Modal;



