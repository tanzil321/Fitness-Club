import React from 'react';
import './Cart.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Cart = ({cart}) => {
    let total = 0;
    for(const data of cart){
        total= total+ data.time;
    }
    let amount=(val)=>{
    document.getElementById('brk').innerText=val;
    }

    
    const notify = () => toast("Wow so easy!");
    
    return (
        <div className='cart'>
            <div>
            <h2>Summary of activities</h2>
            <img className='image' src={require("../../images/photo-1500648767791-00dcc994a43e.avif")} alt="" />
            </div>
            
            <div className='details'>
                <h3>Weight: 75kg</h3>
                <h3>Height: 5.5ft</h3>
                <h3>Age: 26</h3>

            </div>
             
             
            <h3>Add A Break</h3>
            <div className='break'>
                <p onClick={()=> amount(10)} className='break-num'>10min</p>
                <p onClick={()=> amount(20)} className='break-num'>20min</p>
                <p onClick={()=> amount(30)} className='break-num'>30min</p>
                <p onClick={()=> amount(40)} className='break-num'>40min</p>
            </div>

            <h3>Exercise Details</h3>
            <div className='break-commit'>
            <p>Exercise time : {total}h</p>
            </div>
            <div className='break-commit'>
            <span>Break time : <p id='brk'></p>min</span>
            </div>
            <div>
            <button onClick={notify} className='btn-cart'>Activity Completed</button>
            </div>
            <ToastContainer position='top-center' />
        </div>
        

    );
};

export default Cart;