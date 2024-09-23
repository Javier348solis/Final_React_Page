import React from 'react'
import Botones from '../components/Botones'
import { useState, useEffect } from 'react';

function Artcomputadoras() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Obtiene el tipo de usuario desde el localStorage
    const userType = localStorage.getItem("userType");
    
    // Verifica si el usuario es administrador
    if (userType === "admin") {
      setIsAdmin(true);
    }
  }, []);
  return (
    <div>
      <Botones/>
      {isAdmin ? (
        <button className="btn btn-danger rounded-pill">
          Eres Administrador
        </button>
      ) : (
        <p className="Alerta-texto">Tienes que ingresar como administrador, por favor.</p>
      )}
    </div>
  )
}

export default Artcomputadoras
