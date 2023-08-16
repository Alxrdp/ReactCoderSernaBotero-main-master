import React, { useState } from "react";

function ItemCount(props) {
  const [clickCount, setClickCount] = useState(1);

  function handleClickAdd() {
    if (clickCount === props.stock) {
    } else {
      setClickCount(clickCount + 1);
    }
  }

  function handleClickSub() {
    if (clickCount > 1) {
      setClickCount(clickCount - 1);
    }
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="item-count-container"
      >
        <button
          disabled={props.stock === 0}
          className="item-count-button"
          onClick={handleClickSub}
        >
          -
        </button>
        <h3 className="count-text">{clickCount}</h3>
        <button
          disabled={props.stock === 0}
          className="item-count-button"
          onClick={handleClickAdd}
        >
          +
        </button>
      </div>
      
      <button
        disabled={props.stock === 0}
        onClick={() => props.onConfirm(clickCount)}
        className="item-count-button add-to-cart-button"
      > <h5>Añadir al carrito</h5>
      </button>
      
    </div>
  );
}

export default ItemCount;