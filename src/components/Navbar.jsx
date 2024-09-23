import React, { useState } from 'react';
import '../styles/Navbar.css';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';
import { deleteProduct } from '../services/fetch';

function Navbar() {
  const rutas = useNavigate();
  const [modalVisible, setModalVisible] = useState(false);
  const [productosCarrito, setProductosCarrito] = useState([]);

  const openModal = () => {
    const storedProducts = JSON.parse(localStorage.getItem('carrito')) || [];
    setProductosCarrito(storedProducts);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const actualizarCantidad = (id, cantidad) => {
    const updatedProducts = productosCarrito.map(producto => 
      producto.id === id ? { ...producto, cantidad: parseInt(cantidad) } : producto
    );
    setProductosCarrito(updatedProducts);
    localStorage.setItem('carrito', JSON.stringify(updatedProducts));
  };

  const eliminarProducto = async (id) => {
    await deleteProduct(id);
    const updatedProducts = productosCarrito.filter(producto => producto.id !== id);
    setProductosCarrito(updatedProducts);
    localStorage.setItem('carrito', JSON.stringify(updatedProducts));
  };

  return (
    <nav className="navbar">
      <button onClick={openModal} className="boton-Menu">
        <img src="src/Img/K.gif" alt="" />
      </button>
      <button className="boton-home">Home</button>
      <div className="dropdowns">
        <div className="dropdown">
          <button className="boton-services">Servicios</button>
          <div className="dropdown-menu">
            <button onClick={() => rutas('/Artcelular')}>Articulos celular</button>
            <button onClick={() => rutas('/Artcomputadoras')}>Articulos computadora</button>
            <button onClick={() => rutas('/Relojes')}>Relojes inteligentes</button>
            <button onClick={() => rutas('/Promociones')}>Otros</button>
            <button onClick={() => rutas('/Home')}>Volver</button>
          </div>
        </div>
      </div>
      <img className='carrito' src="src/Img/img otros/verificar.png" alt="" width={50} height={50} onClick={openModal} />

      {modalVisible && (
        <Modal
          productos={productosCarrito}
          onClose={closeModal}
          onDelete={eliminarProducto}
          onUpdate={actualizarCantidad}
        />
      )}
    </nav>
  );
}

export default Navbar
