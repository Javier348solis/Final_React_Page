import React, { useEffect, useState } from 'react';
import '../styles/cartasHome.css';
import { actualizaDatos, deleteProduct, obtenerUsuario } from '../services/fetch';
import ListaCards from './ListaCards';

const CartasHome = () => {
  const handleAddToCart = async () => {


    useEffect(()=>{
         const objetos = async()=>{
          const datos = await obtenerUsuario('productos')
          setProductos(datos)
         }
         objetos()
    },[])

    if (!product || !product.id) {
      alert("El producto no es válido.");
      return;
    }

   
    try {
      await onAddToCart(product); 
      alert("Producto añadido con éxito");
    } catch (error) {
      alert("Error al añadir el producto: " + error.message);
    }
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar este producto?");
    if (confirmDelete) {
      try {
        await deleteProduct(product.id);
        alert("Producto eliminado con éxito");
        onDelete(product.id); 
      } catch (error) {
        alert("Error al eliminar el producto: " + error.message);
      }
    }
  };
  const [productosM,setProductos]=useState([])
  return (
    <ListaCards productos={productosM} handleDelete={handleDelete} />
  );
};

export default CartasHome;
