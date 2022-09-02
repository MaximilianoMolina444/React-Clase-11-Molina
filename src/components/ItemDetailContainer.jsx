import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import Items from "./Items";

export default function ItemDetailContainer() {
  const getItems = (products) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });
  };
  const [detailProducts, setDetailProducts] = useState([]);
  useEffect(() => {
    getItems(Items[5]).then((data) => setDetailProducts(data));
  }, []);
  return <ItemDetail detailProducts={detailProducts} />;
}
