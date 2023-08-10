import { Link } from "react-router-dom";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import "./ItemCervezas.css";

function Item(props) {
  const { id, title, litledescription, img } = props;

  return (
    <div className="item-card">
      <div className="item-card_header">
        <h2>{title}</h2>
      </div>
      <div className="item-card_header">
        <h4>{litledescription}</h4>
      </div>
      <div className="item-card_img">
        <img src={img} alt="imagen"></img>
      </div>
      <Link to={`/product/${id}`}>
        <ButtonComponent>Ver Producto</ButtonComponent>
      </Link>
    </div>
  );
}
export default Item;