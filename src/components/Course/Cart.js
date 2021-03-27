import React from 'react';
import Course from './Course';
const Cart = (props) => {
    const cart = props.cart;
    const cartStyle =  {border:'2px solid red', marginLeft:'70%', padding:'10px', textAlign:'left'};
    
    
    const totalPrice = cart.reduce( (sum, course) => sum + course.price, 0)
    return (
        <div style={cartStyle}>
            <h4>Added Course: {cart.length}</h4>
            <p>Total Amount: {totalPrice} TK</p>
        </div>
    );
};

export default Cart;