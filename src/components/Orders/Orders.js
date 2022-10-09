import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';

const Orders = (props) => {
    const {products, previousCart} = useLoaderData();
    const [cart, setCart] = useState(previousCart)


    return (
        <div className='shop-container'>
            <div className='products-container'>

            </div>
            
            <div className='cart-container'>
                <Cart cart ={cart} ></Cart>
            </div>
        </div>
    );
};

export default Orders;