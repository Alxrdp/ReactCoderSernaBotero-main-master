import { useState, useEffect } from "react";
import { getData } from "../../services/firebase"; // Importa solo getData
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { Ring } from "@uiball/loaders";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
function ItemListContainer() {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    async function requestProducts() {
      const respuesta = await getData(); // Usa solo getData
      setProducts(respuesta);
      setIsLoading(false);
    }

    requestProducts();
  }, []);

  if (isLoading) {
    return <Ring size={100} lineWeight={5} speed={1} color="blue" />;
  } else {
    return products.length === 0 ? (
      <p>No hay productos disponibles para esa consulta.</p>
    ) : (
      <ItemList products={products} />
    );
  }
}

export default ItemListContainer;
