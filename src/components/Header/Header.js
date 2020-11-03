import React from 'react';
import { Link } from 'react-router-dom';


import logo from '../../assets/img/logo.svg'
import cart from '../../assets/img/cart.svg'


const Header = () => {
    
    return (
        <header className = 'header'>
            <div className = 'header__logo'>
                <img src = {logo} alt = 'App Logo Book'/>
                <span>ReStore</span>
            </div>
            <ul className = 'header__nav'>
                <Link to =  '/'>
                    <li>Каталог</li>    
                </Link>
                <Link to = '/cart'>
                    <img src = {cart} alt = 'cart'/>
                    <li>Корзина</li>    
                </Link>
            </ul>
            
        </header>
    );
}

export default Header;
