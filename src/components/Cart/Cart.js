import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    let total = 0;
    for(const data of cart){
        total= total+ data.time;
    }
    return (
        <div className='cart'>
            <img src="../../images/donation12.png" alt="" />

             <h2>Summary of activities</h2>
            <h3>Add A Break</h3>
            <h3>Exercise Details</h3>
            <p>Age time requred: {cart.length}</p>
            <p>Exercise time : {total}h</p>
            <button className='btn-cart'>Activity Completed</button>
           
        </div>
    );
};

export default Cart;