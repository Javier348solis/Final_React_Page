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
      
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Producto no valido",
        showConfirmButton: false,
        timer: 1500
      });
      return;
    }

   
    try {
      await onAddToCart(product); 
    
Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Producto añadido con éxito",
  showConfirmButton: false,
  timer: 1500
});
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
