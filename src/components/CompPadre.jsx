
import React, { useState } from 'react';
import Modal from './Modal';

const ComponentePadre = ({ userType }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productos, setProductos] = useState([]);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

 

  return (
    <div>
      <button onClick={handleOpenModal}>Abrir Carrito</button>
      {isModalOpen && (
        <Modal
          productos={productos}
          onClose={handleCloseModal}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
          userType={userType} // Pass userType here
        />
      )}
    </div>
  );
};

export default ComponentePadre;
