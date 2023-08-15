import React from "react";
import Item from "../Item/Item";

function ItemList(props) {
  const { products } = props;

  return (
    <div>
      <h1>Nuestras Cervezas</h1>
      <div className="flex-container">
        {products.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default ItemList;