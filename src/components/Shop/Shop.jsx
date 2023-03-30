import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

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
        const newCart = [...cart , product]
        setCart(newCart)
        addToDb(product.id)
    }
    return (
        <div className='shop-cntainer'>
            <div className="products-container">
                
                {
                    products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;