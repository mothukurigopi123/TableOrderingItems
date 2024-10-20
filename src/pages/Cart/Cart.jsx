import React, { useContext, useEffect, useState } from 'react';
import './Cart.css';
import { Storecontext } from '../../Context/Storecontext';
import { useNavigate } from 'react-router-dom';

const Cart = ({ setTableNo }) => {
    const { cartitem, food_list, removefromcart, gettotalcartamount } = useContext(Storecontext);
    const navigate = useNavigate();
    const [tableNumber, setTableNumber] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleProceed = () => {
        if (tableNumber === '' || tableNumber < 1) {
            alert('Please enter a valid table number.');
        } else {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            navigate('/order');
        }
    };

    return (
        <div className='cart'>
            <div className="cart-items">
                <div className="cart-item-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
                {food_list.map((item) => {
                    if (cartitem[item._id] > 0) {
                        return (
                            <div key={item._id}>
                                <div className='cart-item-title cart-item-item'>
                                    <img src={item.image} alt={item.name} />
                                    <p>{item.name}</p>
                                    <p>₹{(item.price ).toFixed(2)}</p>
                                    <p>{cartitem[item._id]}</p>
                                    <p>₹{(item.price * cartitem[item._id] ).toFixed(2)}</p>
                                    <p className='cross' onClick={() => removefromcart(item._id)}>x</p>
                                </div>
                                <hr />
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
            <div className="cart-bottom">
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>₹{(gettotalcartamount() ).toFixed(2)}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Service Charge</p>
                            <p>₹{gettotalcartamount() === 0 ? 0 : (2 ).toFixed(2)}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Total</b>
                            <b>₹{gettotalcartamount() === 0 ? 0 : ((gettotalcartamount() + 2) * 1).toFixed(2)}</b>
                        </div>
                    </div>
                    <button className="proceed-button" onClick={handleProceed}>Proceed To Checkout</button>
                </div>
                <div className='Tableno'>
                    <div>
                        <p>Please enter the Table no here:</p>
                        <div className='Table-no'>
                            <input 
                                type="number" 
                                min="1"
                                placeholder='Table No' 
                                onChange={(e) => {
                                    setTableNumber(e.target.value);
                                    setTableNo(e.target.value);
                                }} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
