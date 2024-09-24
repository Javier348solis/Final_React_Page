import React, { useState } from 'react';
import Form_Inicio from './Form_Inicio';
import Modal from './Modal';

function AutenModal({ setIsAuthenticated }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [productos, setProductos] = useState([]); 

  const handleLogin = (userType) => {
    if (userType === 'propietario') {
      setIsAdmin(true);
      setModalVisible(true); 
      console.log("handleLogin:", handleLogin);
    }
  };

  return (
    <div>
      <Form_Inicio 
        setIsAuthenticated={setIsAuthenticated} 
        handleLogin={handleLogin} 
      />
      
      {modalVisible && isAdmin && (
        <Modal 
          productos={productos} 
          onClose={() => setModalVisible(false)} 
          onDelete={(id) => {}} 
          onUpdate={(id, cantidad) => {}} 
        />
      )}
    </div>
  );
}

export default AutenModal;
