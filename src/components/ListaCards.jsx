import React from "react";

const ListaCards = ({ productos, handleAddToCart, handleDelete }) => {
    return (
      <div className="lista-cards">
        {productos.map(product => (
          <div className="image-card" key={product.id}> {/* Asegúrate de tener una clave única */}
            <img src="https://extremetechcr.com/tienda/26845-large_default/cargador-argom-carga-rapida-de-pared-volta-p8-65w-arc-ac-0126bk.jpg" alt={product.descripcion} />
            <div className="description">
              <h3>{product.descripcion}</h3>
              <p className="price">₡ {product.precio}</p>
              <button className="add-to-cart" onClick={() => handleAddToCart(product)}>
                Añadir al carrito
              </button>
              <button className="delete-button" onClick={() => handleDelete(product.id)}>
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default ListaCards;
  