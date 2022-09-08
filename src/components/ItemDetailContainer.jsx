import React, { useState, useEffect } from "react";
import { data } from "../mocks/mockData";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
  const [detailProducts, setDetailProducts] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    data
      .then((res) => setDetailProducts(res.find((item) => item.id === id)))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [id]);
  return (
    <div>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <ItemDetail detailProducts={detailProducts} />
      )}
    </div>
  );
}
