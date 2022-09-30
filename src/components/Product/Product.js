import React from 'react';
import './Product.css'

const Product = (props) => {
    const {data,handleAddToCart} = props;
    const {name,picture,time,age,para} = data;

    
    return (
        <div className='product'>
           <img src={picture} alt="" />
           <div>
           <h3>{name}</h3>
           <p>For Age : {age}</p>
           <p>Time Required: {time}h</p>
           </div>
           <button onClick={() => handleAddToCart(data)} className='btn-cart'>Add To Cart</button>
        </div>
    );
};

export default Product;