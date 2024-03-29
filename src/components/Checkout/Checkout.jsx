import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { createOrder } from "../../services/firebase";
import { useContext, useState } from "react";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { Link } from "react-router-dom";

function Checkout() {
  const [buyer, setBuyer] = useState({
    firstname: "",
    lastname: "",
    age: "",
  });

  const navigate = useNavigate();
  const { cart, getTotalPriceInCart } = useContext(CartContext);

  async function handleCheckout(evt) {
    evt.preventDefault();
    const orderData = {
      items: cart,
      buyer: buyer,
      date: new Date(),
      total: getTotalPriceInCart(),
    };

    try {
      const docCreated = await createOrder(orderData);
      alert (`Gracias por tu compra, tu numero de orden es ${docCreated}`);
      navigate(`/order-confirmation/${docCreated}`);

    } catch (error) {
      alert(`No se pudo realizar la compra ${error.message}`);
    }
  }

  function onInputChange(evt) {
    const value = evt.target.value;
    const field = evt.target.name;
    const newState = { ...buyer };
    newState[field] = value;
    setBuyer(newState);
  }

  function resetForm(e) {
    e.preventDefault();
    setBuyer({
      firstname: "",
      lastname: "",
      age: "",
    });
  }

  return (
    <form>
      <h2>Ingresa tus datos para completar la compra</h2>

      <div style={{ display: "flex", marginBottom: 8 }}>
        <label htmlFor="lastname" style={{ width: "100px", marginRight: 4 }}>
          Nombre
        </label>
        <input
          value={buyer.firstname}
          name="firstname"
          type="text"
          onChange={onInputChange}
        />
      </div>

      <div style={{ display: "flex", marginBottom: 8 }}>
        <label htmlFor="lastname" style={{ width: "100px", marginRight: 4 }}>
          Apellido
        </label>
        <input
          value={buyer.lastname}
          name="lastname"
          type="text"
          onChange={onInputChange}
        />
      </div>
      <div style={{ display: "flex", marginBottom: 8 }}>
        <label style={{ width: "100px", marginRight: 4 }}>Edad</label>
        <input
          value={buyer.age}
          name="age"
          type="number"
          onChange={onInputChange}
        />
      </div>
      <button
        disabled={
          !(buyer.firstname !== "" && buyer.lastname !== "" && buyer.age !== "")
        }
        onClick={handleCheckout}
      >
        Confirmar Compra
      </button>
    
        <Link to="/cart">
      <ButtonComponent onClick={resetForm}>Cancelar</ButtonComponent>
      </Link>
    </form>
  );
}

export default Checkout;