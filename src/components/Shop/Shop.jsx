import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products , setProducts]=useState([])
    const [cart , setCart]=useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data=> setProducts(data))
    } , [])

    useEffect(()=>{
        const stordeCart = getShoppingCart()
        const savedCart = []
        //Step 1: Get id
        for (const id in stordeCart) {
            //Step 2: Get the product by using id
            const addedProduct = products.find(product=> product.id === id)
            // Step 3: Get and add quantity of the product
            if (addedProduct) {
                const quantity = stordeCart[id]         
                addedProduct.quantity = quantity
                //add the addedProduct to saved cart
                savedCart.push(addedProduct)
            }
        }
        // step 5 : set the cart
        setCart(savedCart)
    } , [products]) 

    //Dependency means "dependency er data change hole abar anonimous function ta ke call koro".
    // Jehetu useeffect asynchronous, products state ta 1st ei pawa jayna. dependency hisebe etake set kora lage..


    const handleAddToCart= (product)=>{
        // const newCart = [...cart , product]
        let newCart= []
        const exists= cart.find(pd => pd.id === product.id)
        if (!exists) {
            product.quantity = 1
            newCart = [...cart, product]
        } else {
            exists.quantity = exists.quantity + 1
            const remaining = cart.filter(pd=> pd.id !== product.id)
            newCart = [...remaining, exists]
        }
        setCart(newCart)
        addToDb(product.id)
    }

    const handleClearCart = ()=>{
        setCart([])
        deleteShoppingCart()
    }
    return (
        <div className='shop-cntainer'>
            <div className="products-container">
                
                {
                    products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} handleClearCart={handleClearCart}>
                    <Link className='proceed-link' to='/orders'>
                        <button className='btn-proceed'>Review order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;