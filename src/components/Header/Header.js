import React from 'react';
import './Header.css'
import logo from '../../images/Gym-Free-Download-PNG.png'
const Header = () => {
    return (
        <nav className='header'>
           <img src={logo} alt="" />
           <div>
           <h1>Daily Workout</h1>
           </div>
        </nav>
    );
};

export default Header;