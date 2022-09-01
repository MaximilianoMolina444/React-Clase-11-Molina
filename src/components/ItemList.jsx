import React from "react";
import Item from "./Item";

const ItemList = ( {listProducts} ) => {
  return(
    <section className="text-center">
    {listProducts.map((product) => {
      return <Item producto={product} key = {product.id} initial={1} stock= {5} />;
    })}
  </section>
    )
};

export default ItemList;
