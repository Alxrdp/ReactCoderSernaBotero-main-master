import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOrder } from "../../services/firebase";

function OrderConfirm() {
  const [orderData, setOrderData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();
  useEffect(() => {
    getOrder(id)
      .then((order) => {
        console.log(order);
        setOrderData(order);
      })
      .catch((error) => {
        console.error("Error fetching order:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  return (
    <div>
      <h1>Gracias por tu compra! </h1>
      {isLoading ? (
        <p>Cargando...</p>
      ) : orderData !== null ? (
        <div>
          <div className="item-card-1">
            <h4>Tus productos comprados:
              
            {orderData.items.map((item) => (              
              <p style={{ color: "black" }} key={item.id}>
                {item.title} - {item.count} unidades 
                <span> </span>  
              </p>                         
            ))}
            </h4>
          </div>
        </div>
      ) : (
        <p>No se pudo cargar la orden.</p>
      )}
    </div>
  );
}

export default OrderConfirm;
