import React, { useState, useEffect } from 'react';
import imagenesCelular from '../pages/Artcelular';
import { obtenerUsuario } from '../services/fetch';

const CompPadre = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await obtenerUsuario('imagenes'); 
      if (Array.isArray(data)) {
        setItems(data);
      } else {
        console.log('La respuesta no es un array');
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Galería de Imágenes</h1>
      <imagenesCelular items={items} />
    </div>
  );
};

export default CompPadre;
