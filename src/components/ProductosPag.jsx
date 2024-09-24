import React, { useState } from 'react';
import CartasHome from './CartasHome';
import { actualizaDatos } from '../services/fetch';

const ProductosPage = () => {
  const [productos, setProductos] = useState([]);

  const addProductToAPI = async (product) => {
    const response = await actualizaDatos(null, product); // Aquí puedes manejar la lógica para añadir el producto
    setProductos([...productos, response]); // Suponiendo que la respuesta es el producto agregado
  };

  const handleDelete = (id) => {
    setProductos(productos.filter(producto => producto.id !== id));
  };

  return (
    <div>
      {productos.map(product => (
        <CartasHome 
          key={product.id} 
          product={product} 
          onAddToCart={addProductToAPI} 
          onDelete={handleDelete} 
        />
      ))}
    </div>
  );
};

export default ProductosPage;
