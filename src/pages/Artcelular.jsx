import React, { useState } from 'react';
import '../styles/PaginaCelulares.css';
import Navbar from '../components/Navbar';
import Modal from '../components/Modal';
import Footer from '../components/Footer';

const items = [
  { id: 1, url: 'https://extremetechcr.com/tienda/20640-large_default/aon-usb-c-35m-negro-ao-cb-5000.jpg', description: 'AON USB C', price: 3000 },
  { id: 2, url: 'https://extremetechcr.com/tienda/31137-large_default/xiaomi-2-in-1-de-micro-usb-a-tipoc-1m.jpg', description: 'Xiaomi 2 in 1 de Micro USB a', price: 5000 },
  { id: 3, url: 'https://extremetechcr.com/tienda/20643-large_default/aon-usb-c-a-hdmi-3m-ao-cb-2101.jpg', description: 'AON USB C a HDMI 3M', price: 6000 },
  { id: 4, url: 'https://extremetechcr.com/tienda/36953-large_default/adaptador-aon-lightning-a-hembra-hdmi-lightning-ao-ad-1011.jpg', description: 'Adaptador AON Lightning', price: 7000 },
  { id: 5, url: 'https://extremetechcr.com/tienda/36337-large_default/jbl-vibe-beam-began.jpg', description: 'JBL Vibe 5', price: 30000 },
  { id: 6, url: 'https://extremetechcr.com/tienda/32773-large_default/jbl-quantum-tws.jpg', description: 'JBL Quantum', price: 70000 },
  { id: 7, url: 'https://extremetechcr.com/tienda/32048-large_default/jbl-charge-5-negro-wifi-bluetooth.jpg', description: 'JBL Parlante', price: 110000 },
  { id: 8, url: 'https://extremetechcr.com/tienda/28514-large_default/control-backbone-one-playstation-edition-para-iphones-bb-02-w-s.jpg', description: 'Control Backbone one - Playstation', price: 53000 },
];

const PaginaCelulares = () => {
  const [productosCarrito, setProductosCarrito] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const addToCart = (item) => {
    const existingProduct = productosCarrito.find(producto => producto.id === item.id);
    if (existingProduct) {
      const updatedProducts = productosCarrito.map(producto =>
        producto.id === item.id ? { producto, cantidad: producto.cantidad + 1 } : producto
      );
      setProductosCarrito(updatedProducts);
    } else {
      setProductosCarrito([productosCarrito, { item, cantidad: 1 }]);
    }
    openModal(); // Abre el modal al añadir un producto
  };

  const actualizarCantidad = (id, cantidad) => {
    const updatedProducts = productosCarrito.map(producto => 
      producto.id === id ? { producto, cantidad: parseInt(cantidad, 10) } : producto
    );
    setProductosCarrito(updatedProducts);
  };

  const eliminarProducto = (id) => {
    const updatedProducts = productosCarrito.filter(producto => producto.id !== id);
    setProductosCarrito(updatedProducts);
  };

  return (
    <div>
      <Navbar />
      <div className="image-grid">
        {items.map(item => (
          <div key={item.id} className="image-card">
            <img src={item.url} alt={item.description} />
            <div className="description">
              <p>{item.description}</p>
              <p className="price">₡{item.price.toLocaleString()}</p>
              <button className="add-to-cart" onClick={() => addToCart(item)}>Añadir al carrito</button>
            </div>
          </div>
          
        ))}
      </div>
      <Footer/>

      {modalVisible && (
        <Modal
          productos={productosCarrito}
          onClose={closeModal}
          onDelete={eliminarProducto}
          onUpdate={actualizarCantidad}
        />
      )}
    </div>
  );
};

export default PaginaCelulares;
  
