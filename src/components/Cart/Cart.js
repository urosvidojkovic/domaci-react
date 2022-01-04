import React from 'react';
import CartItem from '../CartItem/CartItem';
import './Cart.css';

export default function Cart(props) {
    const {cart} = props;

    return (
        <div className='shopping-cart'>
            <h1>Shopping Cart</h1>
            <div className='cart-item cart-header'> 
                <div>
                    <strong>Name</strong>
                </div>
                <div>
                    <strong>Model</strong>
                </div>
                <div>
                    <strong>Material</strong>
                </div>
                <div>
                    <strong>Color</strong>
                </div>
                <div>
                    <strong>Amount</strong>
                </div>
                <div>
                    <strong>Price ($)</strong>
                </div>
                <div>
                    <strong>Total ($)</strong>
                </div>
            </div>
            {cart.map((cartItem) => (
                <CartItem key={cartItem.id} cartItem={cartItem}></CartItem>
            ))}
        </div>
    )
}