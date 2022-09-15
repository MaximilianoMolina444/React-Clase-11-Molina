import React from 'react'
import {useCart} from '../context/CartContext'


export default function Carrito() {
    const {cart} = useCart()
    console.log('carrito', cart)
    return (
        <div>
            <h1>Tu Carrito</h1>
        </div>
    )
}
