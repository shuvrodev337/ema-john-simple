import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    // const cart = props.cart optoin 2
    // const {cart} = props option 3

    console.log(cart)
    let total = 0
    for (const product of cart) {
        total = total + product.price
    }
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items</p>
            <p>Total Price: {total}</p>
            <p>Total shipping:</p>
            <p>Tax: </p>
            <p>Grand Total:</p>
        </div>
    );
};

export default Cart;