import React, { useContext } from 'react'
import cartContext from '../store/cartContext'

function CartPage() {

    const { cart, setCart } = useContext(cartContext);

    const emptyCart = () => {
        setCart([]);
    }

    return (<>
        <ul>
            {
                cart && cart.length > 0 ? cart.map((item) => {
                    return (<li>{item.name} -  {item.price.toFixed(2)} * {item.quantity} = {(item.price * item.quantity).toFixed(2)}</li>)
                }) : <h1>Sepet boş...</h1>
            }
        </ul>
        <button onClick={() => emptyCart()}>Empty Cart</button>
    </>


    )
}

export default CartPage