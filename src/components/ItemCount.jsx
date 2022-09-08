import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

export default function Contador({ initial, stock, onAdd }) {
  const [contador, setContador] = useState(initial);

  const suma = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const resta = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <Button
        variant="danger"
        onClick={() => {
          suma();
          onAdd();
        }}
      >
        +
      </Button>{" "}
      <Button
        variant="warning"
        onClick={() => {
          resta();
        }}
      >
        -
      </Button>{" "}
      <Button
        variant="primary"
        onClick={() => {
          alert("Productos agregados al carrito");
        }}
      >
        Agregar al carrito
      </Button>{" "}
    </div>
  );
}
