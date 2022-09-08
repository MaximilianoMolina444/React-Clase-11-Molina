import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ItemCount from "./ItemCount";

export default function ItemDetail({ detailProducts }) {
  const {imagen, precio, descripcion, stock} = detailProducts;
  const onAdd = () => {
    console.log("Compraste");
  };
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
          <Card.Text>Precio: ${precio}</Card.Text>
          <Card.Text>Descripcion: {descripcion}</Card.Text>
          <Button variant="primary">¡Pedí la tuya!</Button>
          <ItemCount initial={1} stock={stock} onAdd={onAdd} />
        </Card.Body>
      </Card>
    </div>
  );
}
