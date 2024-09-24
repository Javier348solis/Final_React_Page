import React, { useEffect, useState } from 'react';
import { actualizaDatos, obtenerUsuario, deleteProduct } from '../services/fetch';
import Navbar from '../components/Navbar';

function PaginaAdmi() {
    const [nombreArticulo, setNombreArticulo] = useState("");
    const [archivo, setArchivo] = useState(null);
    const [precio, setPrecio] = useState();
    const [categoria, setCategoria] = useState("");
    const [productos, setProductos] = useState([]); 
    const [productoEdicion, setProductoEdicion] = useState(null);

    useEffect(() => {
      const cargarProductos = async () => {
          try {
              const productosObtenidos = await obtenerUsuario(); 
              setProductos(productosObtenidos || []); // Asegúrate de que nunca sea undefined
          } catch (error) {
              console.error("Error al cargar productos:", error);
              setProductos([]); // Establece un array vacío en caso de error
          }
      };
      cargarProductos();
    }, []);
  
    const manejarArchivo = (e) => {
        setArchivo(e.target.files[0]);
    };

    const agregarProducto = async () => {
        const nuevoProducto = new FormData();
        nuevoProducto.append('nombre', nombreArticulo);
        if (archivo) {
            nuevoProducto.append('archivo', archivo); // Usar el archivo directamente
        }
        nuevoProducto.append('precio', precio);
        nuevoProducto.append('categoria', categoria);

        try {
            const respuesta = await actualizaDatos(nuevoProducto);
            setProductos([...productos, respuesta]); // Agrega el producto devuelto
            reiniciarFormulario();
        } catch (error) {
            console.error("Error al agregar producto:", error);
        }
    };

    const editarProducto = (producto) => {
        setNombreArticulo(producto.nombre);
        setArchivo(null); // Resetea el archivo, no se puede manejar directamente
        setPrecio(producto.precio);
        setCategoria(producto.categoria);
        setProductoEdicion(producto);
    };

    const actualizarProducto = async () => {
        const productoActualizado = new FormData();
        productoActualizado.append('nombre', nombreArticulo);
        if (archivo) {
            productoActualizado.append('archivo', archivo); // Solo enviar el archivo si se ha cambiado
        }
        productoActualizado.append('precio', precio);
        productoActualizado.append('categoria', categoria);
        productoActualizado.append('id', productoEdicion.id);

        try {
            const respuesta = await actualizaDatos(productoActualizado);
            setProductos(productos.map(p => (p.id === productoEdicion.id ? respuesta : p))); // Actualiza en la lista
            reiniciarFormulario();
        } catch (error) {
            console.error("Error al actualizar producto:", error);
        }
    };

    const eliminarProducto = async (id) => {
        try {
            await deleteProduct(id);
            setProductos(productos.filter(p => p.id !== id)); // Filtra de la lista
        } catch (error) {
            console.error("Error al eliminar producto:", error);
        }
    };

    const reiniciarFormulario = () => {
        setNombreArticulo("");
        setArchivo(null);
        setPrecio();
        setCategoria("");
        setProductoEdicion(null);
    };

    return ( 
        <div>
            <input 
                className='file' 
                id="upload-file" 
                accept="image/x-png,image/gif,image/jpeg" 
                type="file" 
                onChange={manejarArchivo} // Cambia el manejador
            />    
            <input 
                type="text" 
                value={nombreArticulo} 
                onChange={(e) => setNombreArticulo(e.target.value)} 
                placeholder="Nombre del articulo" 
            />
            <input 
                type="number" 
                value={precio} 
                onChange={(e) => setPrecio(Number(e.target.value))} // Convierte a número
                placeholder='Precio' 
            />
            <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                <option value="" disabled>Seleccione</option>
                <option value="Relojes">Relojes</option>
                <option value="Art computadoras">Art computadoras</option>
                <option value="Art celulares">Art celulares</option>
                <option value="Otros productos">Otros productos</option>
            </select>
            {productoEdicion ? (
                <button onClick={actualizarProducto}>Actualizar producto</button>
            ) : (
                <button onClick={agregarProducto}>Agregar producto</button>
            )}

            <ul>
                {productos.map(producto => (
                    <li key={producto.id}>
                        {producto.nombre} - {producto.precio} - {producto.categoria}
                        <button onClick={() => editarProducto(producto)}>Editar</button>
                        <button onClick={() => eliminarProducto(producto.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PaginaAdmi;
