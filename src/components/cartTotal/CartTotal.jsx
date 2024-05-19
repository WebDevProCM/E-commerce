import React from "react";
import classes from './CartTotal.module.css'

const CartTotal = (props) =>{
    return (
        <div className={classes.cartTotal}>
            <div className={classes.checkout}>
                <h3 className={classes.title}>The total amount of</h3>
                <div className={classes.total}>
                    <div className={classes.totalDetails}>
                        <p>The subtotal</p>
                        <p>${props.total}</p>
                    </div>
                    <div className={classes.totalDetails}>
                        <p>The Shipping Fee</p>
                        <p>$0</p>
                    </div>
                    <div className={classes.totalDetails}>
                        <p>The total amount:</p>
                        <p>${props.total}</p>
                    </div>
                    <button type="button" className="btn btn-primary">Go To Checkout</button>
                </div>

            </div>
            <div className={classes.promo}>
                <form action="">
                    <label htmlFor="promoInput">Apply Promo Code</label>
                    <input type="text" name="promo" id="promoInput" />
                    <button type="button" className="btn btn-dark">Apply</button>
                </form>
            </div>
        </div>  
    )
}

export default CartTotal
