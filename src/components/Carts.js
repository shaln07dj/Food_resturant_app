import React from 'react'
import Fade from 'react-reveal/Fade';
import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromCart,decreaseCart, addToCart, clearCart, getTotal } from '../slice/cartSlice';

const Carts=()=>{
    const cart=useSelector((state)=>state.cart);
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getTotal());
    },[cart])

    const handleRemoveFromCart=(cartItem)=>{
        dispatch(removeFromCart(cartItem))
    };
    const handleDecreaseCart=(cartItem)=>{
       dispatch(decreaseCart(cartItem))
    };
    const handleIncreaseCart=(cartItem)=>{
        dispatch(addToCart(cartItem));
    };
    const handleClearCart=()=>{
        dispatch(clearCart())
    };
    return (
        <div  className="jumbotron jumbotron-fluid">
            <h2>Food Cart</h2>
            <Fade bottom big cascade>
                <div >
            {cart.cartItems.length===0 ?(
                <div>
                    <p>Your cart is currently empty</p>
                    <div className="start-shopping">
                    <Link to='/menu'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg>
                        <span>Start Shopping</span>
                    </Link>
                    </div>
                    </div>
            ):(
                <div className="cart-container">
                <div className="titles">
                    <h3 className="products-titles">Product</h3>
                    <h3 className="price">Price</h3>
                    <h3 className="Quantity">Quantity</h3>
                    <h3 className="total">Total</h3>
                    </div>
                    <div className="cart-items">
                        {cart.cartItems?.map(cartItem=>(
                            <div className="cart-item" key={cartItem.id}>
                                <div className="cart-product">
                                    <img src={cartItem.img} width="150px" height="100px" alt={cartItem.title}/>
                                    <div>
                                        <h3>{cartItem.name}</h3>
                                        <p>{cartItem.info}</p>
                                        <button onClick={()=>handleRemoveFromCart(cartItem)}>Remove</button>
                                    </div>
                                    </div>
                                   <div className="cart-product-price">{parseInt(cartItem.price)} </div> 
                                   <div className="cart-product-quantity">
                                       <button onClick={()=>handleDecreaseCart(cartItem)}>-</button>
                                       <div className="count">{cartItem.cartQuantity}</div>
                                       <button onClick={()=>handleIncreaseCart(cartItem)}>+</button>
                                   </div>
                                   <div className="cart-product-total-price">
                                       ${parseInt(cartItem.price)*parseInt(cartItem.cartQuantity)}
                                   </div>
                            </div>
                        ))}
                    </div>
                    <div className="cart-summary">
                        <button onClick={()=>handleClearCart()}className="clear-cart">Clear Cart</button>
                        <div className="cart-checkout">
                        <div className="subtotal">
                            <span>subtotal</span>
                            <span className="amount">₹ {parseInt(cart.cartTotalAmount)}</span>
                        </div>
                        <p>Checkout</p>
                        <button className="btn btn-primary">Check Out</button>
                        <div className="continue-shopping">
                    <Link to='/menu'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg>
                        <span> Continue Ordering</span>
                    </Link>
                    </div>
                    </div>
                    </div>
                    </div>
            )}     
        </div>
        </Fade>
        </div>
    )
}

export default Carts
