import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag , faTrash} from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ( {product, handleRemoveFromCart}) => {
    const {img, id, name, quantity, price}= product
    console.log(product);
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className="reviw-details">
                <p className='product-title'>{name}</p>
                <p>Price: <span className="orange-text">${price}</span></p>
                <p>Order Quantity: <span className="orange-text">${quantity}</span></p>
            </div>
            <button className='btn-delete' onClick={()=>handleRemoveFromCart(id)}>
            <FontAwesomeIcon className='dlt-icon' icon={faTrash} />
            </button>
        </div>
    );
};

export default ReviewItem;