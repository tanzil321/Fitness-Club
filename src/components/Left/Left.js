import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTasks } from '@fortawesome/free-solid-svg-icons'
import Product from '../Product/Product';
import './Left.css'

const Left = () => {
    const [products,setProducts] = useState([]);
    const [cart,SetCart] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data=>setProducts(data))
    },[])

    const handleAddToCart=(data)=>{
        console.log('clicked');
        const newCart = [...cart,data]
        SetCart(newCart);
    }
    return (
        <div>
            <div className='title'>
            <h2 className='exercise'>Daily Exercise Schedule </h2>
            <FontAwesomeIcon icon={faTasks}></FontAwesomeIcon>
            </div>
            
            
        <div className='left-container'>
            
           <div className="products-container">
            
            
           </div>
           <div className="cart-container">
            <Cart cart={cart}></Cart>
           </div>
        </div>
        </div>
    );
};

export default Left;