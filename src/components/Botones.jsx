import { useState } from 'react';
import Modal from 'react-modal';
import { actualizaDatos, deleteProduct } from '../services/fetch';



function Botones({ productId, onRefresh }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [productData, setProductData] = useState({}); 

    const handleUpdate = async () => {
        await actualizaDatos(productId, productData);
        onRefresh(); 
        closeModal();
    };

    const handleDelete = async () => {
        await deleteProduct(productId);
        onRefresh(); 
        closeModal();
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setProductData({}); 
    };

    return (
        <div className='cuadro-modal'>
            <button className='botones-modal' onClick={() => setModalIsOpen(true)}>Actualizar / Eliminar</button>

            <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
                <h2>Actualizar o Eliminar Producto</h2>
                <input
                    type="text"
                    placeholder="Nombre del producto"
                    value={productData.name || ''}
                    onChange={(e) => setProductData({ ...productData, name: e.target.value })}
                />
                <input
                    type="number"
                    placeholder="Precio del producto"
                    value={productData.price || ''}
                    onChange={(e) => setProductData({ ...productData, price: e.target.value })}
                />
                
                <div>
                    <button onClick={handleUpdate}>Actualizar</button>
                    <button onClick={handleDelete}>Eliminar</button>
                    <button onClick={closeModal}>Cerrar</button>
                </div>
            </Modal>
        </div>
    );
}

export default Botones;

