import { useState, useEffect, useContext } from "react";
import { getProductData } from "../../services/firebase";
import { Link, useParams } from "react-router-dom";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";

function ItemDetailsContainer() {
  const [product, setProduct] = useState({});
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const { id } = useParams();
  const { addToCart, getItemInCart } = useContext(CartContext);
  const itemInCart = getItemInCart(id);
  const maxItems = itemInCart
    ? product.stock - itemInCart.count
    : product.stock;

  useEffect(() => {
    async function requestProduct() {
      const respuesta = await getProductData(id);
      setProduct(respuesta);
    }

    requestProduct();
  }, [id]);

  function handleAddToCart(clickCount) {
    addToCart(product, clickCount);
    alert(`Los productos fueron agregados al carrito, cantidad: ${clickCount}`);
    setIsAddedToCart(true);
  }
  return (
    <div className="item-card-1">
    <div style={{ marginBottom: "150px" }}>
      <div>
        <img width={200} src={"."+product.img} alt="imagen"></img>
      </div>
      <div>
        <h2>{product.title}</h2>
      </div>
      <div>
        <h4>$ {product.price}</h4>
        <small>{product.description}</small>
      </div>
      {product.stock > 0 ? (
        isAddedToCart ? (
          <Link to="/cart">
        <ButtonComponent>Ir al carrito</ButtonComponent>
      </Link>
        ) : (
          <ItemCount stock={maxItems} onConfirm={handleAddToCart} />
        )
      ) : (
        <p>Sin stock</p>
      )}
      {itemInCart && (
        <h2>Agregaste {itemInCart.count} unidades de {product.title}</h2>
      )}
      <Link to="/">
        <ButtonComponent>Volver al inicio</ButtonComponent>
      </Link>
    </div>
    </div>
  );
}

export default ItemDetailsContainer;
