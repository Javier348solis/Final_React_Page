import React, { StrictMode, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Form_Registro from './components/Form_Registro.jsx';
import Form_Inicio from './components/Form_Inicio.jsx';
import PaginaPrincipal from './pages/Paginaprincipal.jsx';
import Artcelular from './pages/Artcelular.jsx';
import Artcomputadoras from './pages/Artcomputadoras.jsx';
import Otros from './pages/Otros.jsx';
import Promociones from './pages/Promociones.jsx';
import Relojes from './pages/Relojes.jsx';
import RutasPrivadas from './routes/RutasPrivadas.jsx';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado de autenticación

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Form_Registro/>,
    },
    {
      path: "/Inicio",
      element: <Form_Inicio setIsAuthenticated={setIsAuthenticated} />, // Pasa setIsAuthenticated
    },
    {
      path: "/Home",
      element: (
        <RutasPrivadas isAuthenticated={isAuthenticated}>
          <PaginaPrincipal />
        </RutasPrivadas>
      ),
    },
    {
      path: "/Celulares",
      element: <Artcelular />,
    },
    {
      path: "/Computadoras",
      element: <Artcomputadoras />,
    },
    {
      path: "/Otro",
      element: <Otros />,
    },
    {
      path: "/Promos",
      element: <Promociones />,
    },
    {
      path: "/Watches",
      element: <Relojes />,
    },
  ]);

  return <RouterProvider router={router} />;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
