import React, { useEffect, useState } from 'react';
import { getData } from "../../services/firebase";
import "../Item/ItemCervezas.css";


const ItemDetail = () => {
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    getData()
      .then(data => {
        if (data.length > 0) {
          setProducto(data[0]);
        }
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
      });
  }, []);

  return (
    <div className="item-card-1">
      {producto ? (
        <div key={producto.id}>
          <h2>{producto.title}</h2>
          <div className="item-card_img">
            <img src={producto.img} alt={producto.title} />
          </div>
          <small>{producto.description}</small>
          <h4>{producto.price}</h4>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default ItemDetail;