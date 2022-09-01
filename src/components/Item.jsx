import React from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ItemCount from './ItemCount'


export default function Item({producto}) {
    return (
        <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={producto.imagen} />
        <Card.Body>
          <Card.Text>Precio: ${producto.precio}</Card.Text>
          <Button variant="primary">¡Pedí la tuya!</Button>
          <ItemCount initial={1} stock= {5}/>
        </Card.Body>
      </Card>
    </div>
    )
}
