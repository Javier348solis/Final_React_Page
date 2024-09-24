import React from 'react';
import '../styles/Modal.css';

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
              <li key={producto.item.id}>
                <img src={producto.item.url} alt={producto.item.description} className="product-image" />
                <span>{producto.item.description} - ₡{producto.item.price.toLocaleString()} (Cantidad: {producto.cantidad})</span>
                <input
                  type="number"
                  value={producto.cantidad}
                  min="1"
                  onChange={(e) => onUpdate(producto.item.id, e.target.value)}
                />
                <button onClick={() => onDelete(producto.item.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Modal;



