import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, BrowserRouter, createBrowserRouter,RouterProvider } from 'react-router-dom';
import Form_Registro from './components/Form_Registro.jsx';
import Form_Inicio from './components/Form_Inicio.jsx';
import Navbar from './components/Navbar.jsx';
import PaginaPrincipal from './pages/Paginaprincipal.jsx';
import Artcelular from './pages/Artcelular.jsx';
import Artcomputadoras from './pages/Artcomputadoras.jsx';
import Otros from './pages/Otros.jsx';
import Promociones from './pages/Promociones.jsx';
import Relojes from './pages/Relojes.jsx';
import Contacto from './components/contacto.jsx';


const router = createBrowserRouter ([
  {
    path: "/",
    element: <PaginaPrincipal/>
  },
  {
    path: "/Inicio",
    element: <Form_Inicio/>
  },
  {
    path: "/Home",
    element: <PaginaPrincipal/>
  },
  {
    path: "/Celulares",
    element: <Artcelular/>
  },
  {
    path: "/Computadoras",
    element: <Artcomputadoras/>
  },
  {
    path: "/Otro",
    element: <Otros/>
  },
  {
    path: "/Promos",
    element: <Promociones/>
  },
  {
    path: "/Watches",
    element: <Relojes/>
  } 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} /> 
  </StrictMode>
);
