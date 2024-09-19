import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, BrowserRouter, createBrowserRouter,RouterProvider } from 'react-router-dom';
import Form_Registro from './components/Form_Registro.jsx';
import Form_Inicio from './components/Form_Inicio.jsx';



const router = createBrowserRouter ([
  {
    path: "/",
    element: <Form_Registro/>
  },
  {
    path: "/Inicio",
    element: <Form_Inicio/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} /> 
  </StrictMode>
);
