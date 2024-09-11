import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Form_Inicio from './components/Form_Inicio.jsx';
import Form_Registro from './components/Form_Registro.jsx';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Form_Registro/>
  </StrictMode>
);
