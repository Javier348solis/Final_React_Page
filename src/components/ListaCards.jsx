import { useState, useEffect } from "react";
import { deleteProduct, actualizaDatos } from "../services/fetch";

const ListaCards = ({ productos, handleAddToCart }) => {
  const [productList, setProductList] = useState(productos);
  const [editingProduct, setEditingProduct] = useState(null);
  const [newData, setNewData] = useState({ descripcion: "", precio: "" });

  useEffect(() => {
    setProductList(productos);
  }, [productos]);

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      setProductList(prevList => prevList.filter(product => product.id !== id));
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
    }
  };

  const handleEditClick = (product) => {
    setEditingProduct(product);
    setNewData({ descripcion: product.descripcion, precio: product.precio });
  };

  const handleUpdate = async (id) => {
    try {
      await actualizaDatos(id, newData);
      setProductList(prevList =>
        prevList.map(product =>
          product.id === id ? { ...product, ...newData } : product
        )
      );
      setEditingProduct(null);
    } catch (error) {
      console.error('Error al actualizar el producto:', error);
    }
  };

  return (
    <div className="lista-cards">
      {productList.map(product => (
        <div className="image-card" key={product.id}>
          <img src="https://extremetechcr.com/tienda/26845-large_default/cargador-argom-carga-rapida-de-pared-volta-p8-65w-arc-ac-0126bk.jpg" alt={product.descripcion} />
          <div className="description">
            {editingProduct && editingProduct.id === product.id ? (
              <>
                <input
                  type="text"
                  value={newData.descripcion}
                  onChange={(e) => setNewData({ ...newData, descripcion: e.target.value })}
                  placeholder="Descripción"
                />
                <input
                  type="number"
                  value={newData.precio}
                  onChange={(e) => setNewData({ ...newData, precio: e.target.value })}
                  placeholder="Precio"
                />
                <button onClick={() => handleUpdate(product.id)}>Actualizar</button>
                <button onClick={() => setEditingProduct(null)}>Cancelar</button>
              </>
            ) : (
              <>
                <h3>{product.descripcion}</h3>
                <p className="price">₡ {product.precio}</p>
                <button className="add-to-cart" onClick={() => handleAddToCart(product)}>
                  Añadir al carrito
                </button>
                <button className="delete-button" onClick={() => handleDelete(product.id)}>
                  Eliminar
                </button>
                <button className="edit-button" onClick={() => handleEditClick(product)}>
                  Actualizar
                </button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListaCards;
