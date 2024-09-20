import React from 'react'
import { actualizaDatos } from '../services/fetch'
import Navbar from '../components/Navbar'
import { useEffect, useState } from 'react'

function PaginaAdmi() {
    const [nombreArticulo, setNombreArticulo] = useState("");
    const [archivo, setArchivo] = useState("");
    const [precio, setPrecio] = useState(0);
    
    const producto = {
        nombre: nombreArticulo,
        archivo: seleccionarArchivo,
        precio: precioArticulo,
        categoria: selecCategori
    }
    

  return (
    
    <div>
        <Navbar/>
    <input type="file" name="" id="" placeholder='Seleccione el archivo'/>
    <input type="text" placeholder="Nombre del articulo"/>
    <input type="number" name="" id="" placeholder='Precio'/>
    <select name="" id="">
        <option selected disabled value="">Seleccione</option>
        <option value="">Relojes</option>
        <option value="">Art computadoras</option>
        <option value="">Art celulares</option>
        <option value="">Otros productos</option>
    </select>
    <button type="submit">Agregar producto</button>
    </div>
  )
}

export default PaginaAdmi
