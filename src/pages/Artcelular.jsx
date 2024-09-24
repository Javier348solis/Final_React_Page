import React from 'react';

const items = [
  { url: 'https://extremetechcr.com/tienda/20640-large_default/aon-usb-c-35m-negro-ao-cb-5000.jpg', description: 'AON USB C', price: '₡10.00' },
  { url: 'https://example.com/image2.jpg', description: 'Descripción 2', price: '₡15.00' },
  { url: 'https://example.com/image3.jpg', description: 'Descripción 3', price: '₡20.00' },
  { url: 'https://example.com/image4.jpg', description: 'Descripción 4', price: '₡25.00' },
  { url: 'https://example.com/image5.jpg', description: 'Descripción 5', price: '₡30.00' },
  { url: 'https://example.com/image6.jpg', description: 'Descripción 6', price: '₡35.00' },
  { url: 'https://example.com/image7.jpg', description: 'Descripción 7', price: '₡40.00' },
  { url: 'https://example.com/image8.jpg', description: 'Descripción 8', price: '₡45.00' },
];


<imagenesCelular items={items} />

const imagenesCelular = ({ items }) => {
  // Verifica si items es un array
  if (!Array.isArray(items)) {
    return <p>No hay imágenes disponibles.</p>;
  }

  return (
    <div className="image-grid">
      {items.map((item, index) => (
        <div key={index} className="image-card">
          <img src={item.url} alt={item.description} />
          <div className="description">
            <p>{item.description}</p>
            <p className="price">${item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default imagenesCelular

