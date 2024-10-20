import React, { useContext, useState } from 'react';
import './Placeorder.css';
import { Storecontext } from '../../Context/Storecontext';

const Placeorder = ({ tableNo }) => {
    const { gettotalcartamount, cartitem, food_list, clearCart } = useContext(Storecontext);
    const [orderSuccess, setOrderSuccess] = useState(false);

    const getCartItemsDetails = () => {
        return food_list
            .filter(item => cartitem[item._id] > 0)
            .map(item => (
                <div key={item._id} className="cart-item-details">
                    <p className="item-name">{item.name}</p>
                    <p className="item-price">₹{(item.price * 1).toFixed(2)}</p>
                    <p className="item-quantity">{cartitem[item._id]}</p>
                    <p className="item-subtotal">₹{(item.price * cartitem[item._id] * 1).toFixed(2)}</p>
                </div>
            ));
    };

    const handleOrder = (event) => {
        event.preventDefault();
        clearCart();
        setOrderSuccess(true);
        setTimeout(() => {
            window.location.reload();
        }, 2000);
    };

    return (
        <form className='place-order' onSubmit={handleOrder}>
            <div className="place-order-left">
                <h1 className="title">Delivery Information</h1>
                <p className="table-number">Table Number: <span>{tableNo}</span></p>
                <div className="cart-item-summary">
                    {getCartItemsDetails()}
                </div>
                {orderSuccess && (
                    <div className="success-message">
                        <p>Your order has been booked successfully!</p>
                    </div>
                )}
            </div>
           
            <div className="place-order-right">
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>₹{(gettotalcartamount() * 1).toFixed(2)}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Service Charge</p>
                            <p>₹{gettotalcartamount() === 0 ? 0 : (2 * 1).toFixed(2)}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Total</b>
                            <b>₹{gettotalcartamount() === 0 ? 0 : ((gettotalcartamount() + 2) * 1).toFixed(2)}</b>
                        </div>
                    </div>
                    <button className="proceed-button">Proceed Order</button>
                </div>
            </div>
        </form>
    );
}

export default Placeorder;
