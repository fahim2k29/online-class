import React from 'react';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }))(Badge);
const Cart = (props) => {
    const cart = props.cart;
    const cartStyle = { border: '2px solid red', marginLeft: '70%', padding: '10px', textAlign: 'left' };
    const totalAmount = cart.reduce((sum, course) => sum + course.price, 0);
    const cartColor = cart.length ? "secondary" : "";
    let smileFace;
    if(cart.length > 0 ){
        smileFace = <InsertEmoticonIcon /> ;
    } 

    return (
        <div style={cartStyle}>
            <h4>Added Course:
                <IconButton aria-label="cart"  color={cartColor}>
                    <StyledBadge badgeContent={cart.length}  color="primary">
                        <ShoppingCartIcon /> 
                    </StyledBadge>
                </IconButton>
                    <span> </span> 
                    <span> </span>    {smileFace}

                </h4>
            <p>Total Amount: {totalAmount} TK</p>
        </div>
    );
};

export default Cart;