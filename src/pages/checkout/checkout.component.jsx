import React from'react'
import './checkout.styles.scss'

import {connect} from 'react-redux'
import {selectCartItems,selectCartTotal} from '../../redux/cart/cart.selectors'
import {createStructuredSelector} from 'reselect'
import CheckoutItem from '../../component/checkout-item/checkout-item.component'
const Checkout = ({cartItems,total}) =>{
    return(
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            
                {
                    cartItems.map(cartItem => 
                        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                    )
                }
                <div className="total">
                    <span>Total : ${total}</span>
                </div>
            
        </div>
    )
}
const mapStateToProps = createStructuredSelector ({
    cartItems : selectCartItems,
    total:selectCartTotal
});
export default connect(mapStateToProps)(Checkout)
