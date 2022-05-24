import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import cartContext from '../store/cartContext';


function ProductDetail() {

    const [product, setproduct] = useState({});

    const { cart, setCart } = useContext(cartContext);

    let { seo } = useParams();

    let title = seo.split(',')[0]
    let id = seo.split(',')[1]


    useEffect(() => {

        fetch("https://northwind.vercel.app/api/products/" + id)
            .then(res => res.json())
            .then((data) => {
                setproduct(data);
            })

    }, []);


    const addToCart = (item) => {

        //Eğer mevcut ürün varsa ürünün adedini bir arttır. Yoksa o ürünü sepete ekle.
        //find csharp üzerinde firstOrDefault a karşılık gelmekte

        //Öncelikle sepette o ürün var mı bakıyoruz.
        var product = cart.find(q => q.id == item.id);

        if(product){
            product.quantity = product.quantity + 1;
            setCart([...cart]);
        }
        else{
            let newProduct = {
                id: item.id,
                name: item.name,
                price: item.unitPrice,
                quantity : 1
            } 

            setCart([...cart, newProduct]);
        }



    }

    return (<>
        <h1>Name: {product.name}</h1>
        <h1>Price: {product.unitPrice?.toFixed(2)}</h1>
        <h1>Stock: {product.unitsInStock}</h1>
        <button onClick={() => addToCart(product)}>Add to Cart</button>

    </>

    )
}

export default ProductDetail



// [
//     {
//         productId: 3,
//         name:'Iphone',
//         price:200,
//         quantity:2
//     },
//     {
//         productId: 4,
//         name:'Samsung',
//         price:100,
//         quantity:5
//     }
// ]