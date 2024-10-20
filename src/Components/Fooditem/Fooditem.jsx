import React, { useContext } from 'react';
import './Fooditem.css';
import { assets } from '../../assets/assets';
import { Storecontext } from '../../Context/Storecontext';

const Fooditem = ({ id, name, price, description, image }) => {
    const { cartitem, addtocart, removefromcart } = useContext(Storecontext);

    return (
        <div className="food-item">
            <div className="food-item-img-container">
                <img src={image} alt={name} className="food-item-image" />
                {!cartitem[id] ? (
                    <img 
                        src={assets.add_icon_white} 
                        alt="Add" 
                        className="add" 
                        onClick={() => addtocart(id)} 
                    />
                ) : (
                    <div className='food-item-counter'>
                        <img 
                            onClick={() => removefromcart(id)} 
                            src={assets.remove_icon_red} 
                            alt="Remove" 
                        />
                        <p>{cartitem[id]}</p>
                        <img 
                            onClick={() => addtocart(id)} 
                            src={assets.add_icon_green} 
                            alt="Add" 
                        />
                    </div>
                )}
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p className="food-item-name">{name}</p>
                    <img src={assets.rating_starts} alt="Rating stars" className="rating-stars" />
                </div>
                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">₹{price.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default Fooditem;
