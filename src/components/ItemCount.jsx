import React, { useState, useEffect} from "react";
import Button from "react-bootstrap/Button";

export default function Contador({initial, stock, onAdd}) {
    const [contador, setContador] = useState(initial);
      useEffect(() => {
        console.log("se inicio el componente");
      }, []);
    return (
        <div>
            <h1>Contador: {contador}</h1>
      <Button
        variant="danger"
        onClick={() => {
          if (contador < stock){
            setContador(contador + 1);
            onAdd()
          }
          
        }}
      >
        +
      </Button>{" "}
      <Button
        variant="warning"
        onClick={() => {
          if (contador > 0) {
            setContador(contador - 1)
          };
        }}
      >
        -
      </Button>{" "}
      <Button
        variant="primary"
        onClick={() => {
          alert("Productos agregados al carrito")
        }}
      >
        Agregar al carrito
      </Button>{" "}
        </div>
        
    )
    
}
