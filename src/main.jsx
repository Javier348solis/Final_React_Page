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
import Quienes from './pages/Quienes.jsx';
import Contacto from './components/contacto.jsx';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Form_Registro/>,
    },
    {
      path: "/Inicio",
      element: <Form_Inicio setIsAuthenticated={setIsAuthenticated} />, // 
    },
    {
      path: "/home",
      element: (
        <RutasPrivadas isAuthenticated={isAuthenticated}>
          <PaginaPrincipal/>
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
    {
      path: "/Reseña",
      element: <Quienes/>,
    },  {
      path: "/FormContacto",
      element: <Contacto/>,
    },
    
  ]);

  return <RouterProvider router={router} />;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);

export default App
