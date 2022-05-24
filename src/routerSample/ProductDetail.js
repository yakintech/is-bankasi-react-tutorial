import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


function ProductDetail() {

    const [product, setproduct] = useState({})

    let { seo } = useParams();

    let title = seo.split(',')[0]
    let id = seo.split(',')[1]


    useEffect(()=> {

        fetch("https://northwind.vercel.app/api/products/" + id)
        .then(res => res.json())
        .then((data) => {
            setproduct(data);
        })

    },[])


    return (<>
        <h1>Name: {product.name}</h1>
        <h1>Price: {product.unitPrice?.toFixed(2)}</h1>
        <h1>Stock: {product.unitsInStock}</h1>

        
    </>

    )
}

export default ProductDetail