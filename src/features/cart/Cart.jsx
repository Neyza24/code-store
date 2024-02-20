import React from 'react';
import { changeItemQuantity } from './cartSlice';
import { calculateTotal, getCurrencySymbol } from '../../utilities/utilities';


const Cart = ({cart, dispatch, currencyFilter}) => {

    const onInputChangeHandler = (name,input) => {
        //if the user  enter bad value
        if(input === '') {
            return;
        }

        //Otherwise, convert de type value the input a number 
        const newQuantity = Number(input);

        dispatch(changeItemQuantity(name, newQuantity));
    };

    // Use the cart and currencyFilter slices to render their data in cart component
    const cartElements = [];

    for(let itemName in cart) {
        cartElements.push(createCartItem(itemName))
    };

    const total = calculateTotal(cart, currencyFilter);

    return (
        <div id='cart-container'>
            <ul id='cart-items'>
                {cartElements}
            </ul>
            <h3 className='total'>
                Total{' '}
                <span className='total-value'>
                    {getCurrencySymbol(currencyFilter)}{total} {currencyFilter}
                </span>
            </h3>
        </div>
    );

    function createCartItem(name) {
        const item = cart[name];

        if(item.quantity === 0) {
            return;
        }

        return (
            <li key={name}>
                <p>{name}</p>
                <select
                    className='item-quantity'
                    value={item.quantity}
                    onChange={(e) => onInputChangeHandler(name, e.target.value)}
                >
                    {
                        [...Array(100).keys()].map((_, index) => (
                            <option key={index} value={index}>
                                {index}
                            </option>
                        ))
                    }
                </select>
            </li>

        )
    }
}

export default Cart;