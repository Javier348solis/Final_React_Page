import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, BrowserRouter, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import Form_Registro from './components/Form_Registro.jsx';
import Form_Inicio from './components/Form_Inicio.jsx';



const router = createBrowserRouter ([
  {
    path: "/Registro",
    element: <Form_Registro/>
  },
  {
    path: "/Inicio",
    element: <Form_Inicio/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
           <RouterProvider router={router} />
  </BrowserRouter>
);
