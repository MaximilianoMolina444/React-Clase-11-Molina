import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { data } from "../mocks/mockData";
import { useParams } from "react-router-dom";
export default function ItemListContainer() {
  const styles = {
    color: "blue",
  };
  const [listProducts, setProductsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoriaId } = useParams();
  useEffect(() => {
    setLoading(true);
    data
      .then((res) => {
        if (categoriaId) {
          setProductsList(res.filter((item)=>item.categoria === categoriaId))
        }else{
          setProductsList(res)
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [categoriaId]);
  return (
    <div style={styles}>
      {loading ? <p>Cargando...</p> : <ItemList listProducts={listProducts} />}
    </div>
  );
}
