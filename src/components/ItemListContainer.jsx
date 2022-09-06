import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { data } from "../mocks/mockData";
export default function ItemListContainer() {
  const styles = {
    color: "blue",
  };
  const [listProducts, setProductsList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    data
      .then((res) => setProductsList(res))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);
  return (
    <div style={styles}>
      {loading ? <p>Cargando...</p> : <ItemList listProducts={listProducts} />}
    </div>
  );
}
