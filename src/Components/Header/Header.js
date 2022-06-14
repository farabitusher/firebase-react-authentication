import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'


const Header = () => {
    return (
        <div>
           <h3>Home and link</h3>
           <nav className='nav-area'>
                <NavLink to='./'>Home</NavLink>
                <NavLink to='./login'>Login</NavLink>
                <NavLink to='./signup'>SignUp</NavLink>
           </nav>
        </div>
    );
};

export default Header;