import { useState, useEffect } from "react";
import { obtenerUsuario, deleteProduct } from "../services/fetch";
import ListaCards from "./ListaCards";

const ProductList = () => {
  const [productos, setProductos] = useState([]);

  // Obtiene los productos desde la API 
  useEffect(() => {
    const fetchProductos = async () => {
      const data = await obtenerUsuario('productos'); 
      setProductos(data);
    };

    fetchProductos();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id); // Elimina el producto de la API
      // Actualiza el estado para eliminar el producto de la lista
      setProductos(productos.filter(product => product.id !== id));
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
    }
  };

  const handleAddToCart = (product) => {
    console.log('Añadido al carrito:', product);
    // Lógica para añadir al carrito
  };

  return (
    <div>
      <h1>Lista de Productos</h1>
      <ListaCards productos={productos} handleAddToCart={handleAddToCart} handleDelete={handleDelete} />
    </div>
  );
};

export default ProductList;
