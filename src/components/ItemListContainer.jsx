import React, {useState, useEffect} from 'react'
import { customFetch } from './customFetch';
import ItemList from './ItemList'
import Items from './Items'

export default function ItemListContainer({item}) {
    const styles = {
        color: "blue"
    };
    const [listProducts, setListProducts] = useState ([])

    useEffect(() =>{
        customFetch(Items)
        .then(data=> setListProducts(data))
    },[])
    console.log(listProducts)



    return (
        <>
            <div style={styles}>
                <h1>{item.saludo}</h1>
            </div>
            <ItemList listProducts={listProducts}/>
        </>
    )
}
