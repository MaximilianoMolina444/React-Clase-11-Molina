import React, { useState, useEffect } from "react";
import { data } from "../mocks/mockData";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
  const [detailProducts, setDetailProducts] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    data
      .then((res) => setDetailProducts(res.find((item) => item.id === 5)))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);
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
