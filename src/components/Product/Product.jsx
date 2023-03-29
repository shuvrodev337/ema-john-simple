import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {name, seller, price, img, quantity, ratings}= props.product
    const handleAddToCart=props.handleAddToCart
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
            <h6 className='product-name'>{name}</h6>
            <p>Price: ${price}</p>
            <p>Manufacturer: {seller}</p>
            <p>Rating: {ratings}</p>
            </div>
            <button onClick={()=>handleAddToCart(props.product)} className='btn-cart'>
                Add To cart  &nbsp;
                <FontAwesomeIcon icon={faShoppingBag} />
            </button>
        </div>
    );
};

export default Product;