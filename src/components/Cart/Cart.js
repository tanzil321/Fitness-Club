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
            <p><small>Tanzil Parvez</small></p>
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
            <p>Exercise time : {total} hour</p>
            </div>
            <div className='break-commit'>
            <span>Break time : <p id='brk'></p>min</span>
            </div>
            <div>
            <button onClick={notify} className='btn-cart'>Activity Completed</button>
            </div>
            <ToastContainer position='top-center' />

            <div>
            <h2 className='que1'>How Does React Work?</h2>
            <p className='que1'>A React app usually has a single root DOM node. Rendering an element into the DOM will change the user interface of the page.For instance, the following code displays “Hello World” on the page by rendering the element into a DOM node called root.</p>
            </div>

        <div>
            <h2 className='que1'>State Vs Props</h2>
            <p className='que1'>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this.setState property is used to update the state values in the component.</p>
        </div>
        <div>
            <h2 className='que1'>Use Of useEffect expect data load</h2>
            <p className='que1'>The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional.</p>
        </div>
        </div>
        

    );
};

export default Cart;