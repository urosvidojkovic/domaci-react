import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header(props){
    return  <div className='header'>
        <p className='heading'>ChairShop</p>
        <div className='nav-item'>
            <Link to="/products"> Products </Link>
        </div>
        <div className='nav-item'>
            <Link to="/shopping-cart"> Shopping Cart </Link>
        </div>
    </div>
}