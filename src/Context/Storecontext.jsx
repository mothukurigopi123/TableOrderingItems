import { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const Storecontext = createContext(null);

const Storecontextprovider = (props) => {
    const [cartitem, setcartitem] = useState({});

    const addtocart = (itemid) => { 
        if (!cartitem[itemid]) {
            setcartitem((prev) => ({ ...prev, [itemid]: 1 }));
        } else {
            setcartitem((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }));
        }
    };

    const removefromcart = (itemid) => {
        if (cartitem[itemid] > 1) {
            setcartitem((prev) => ({ ...prev, [itemid]: prev[itemid] - 1 }));
        } else {
            const { [itemid]: _, ...rest } = cartitem; // Remove item from cart if quantity is 1
            setcartitem(rest);
        }
    };

    const gettotalcartamount = () => {
        let totalamount = 0;
        for (const item in cartitem) {
            if (cartitem[item] > 0) {
                let iteminfo = food_list.find((product) => product._id === item);
                totalamount += iteminfo.price * cartitem[item];
            }
        }
        return totalamount;
    };

    const clearCart = () => {
        setcartitem({}); // Clear the cart items
    };

    const contextvalue = {
        food_list,
        cartitem,
        setcartitem,
        addtocart,
        removefromcart,
        gettotalcartamount,
        clearCart, // Include clearCart in the context value
    };

    return (
        <Storecontext.Provider value={contextvalue}>
            {props.children}
        </Storecontext.Provider>
    );
};

export default Storecontextprovider;
