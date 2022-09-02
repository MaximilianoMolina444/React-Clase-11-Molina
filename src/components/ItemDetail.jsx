import React, { useState, useEffect }from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ItemCount from './ItemCount'

export default function ItemDetail({detailProducts}) {
    console.log(detailProducts)
    return (
        <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={detailProducts.imagen} />
        <Card.Body>
          <Card.Text>Precio: ${detailProducts.precio}</Card.Text>
          <Card.Text>Barbijo lavable super comodo para uso diario</Card.Text>
          <Button variant="primary">¡Pedí la tuya!</Button>
          <ItemCount initial={1} stock= {5}/>
        </Card.Body>
      </Card>
    </div>
    )
}
