import React, { useEffect } from 'react';
import { loadData } from './inventorySlice';
import { addItem } from '../cart/cartSlice';
import { getCurrencySymbol, calculatePrice } from '../../utilities/utilities';


const Inventory = ({ allProducts, dispatch, currencyFilter }) => {

    const onMount = () => {
        dispatch(loadData());
    };

    useEffect(onMount, [dispatch]);

    const onClickHandler = (invetoryItem) => {
        dispatch(addItem(invetoryItem))
    };


    function createInventoryItem(inventoryItem) {
        const { name, price, img } = inventoryItem;

        const displayPrice = calculatePrice(price, currencyFilter);

        return (
            <li key={name} className='item'>
                <img src={img} alt={name} />
                <h3>{name}</h3>
                <h3 className='price'>
                    {getCurrencySymbol(currencyFilter)}{displayPrice.toFixed(2)} {currencyFilter}
                </h3>
                <button
                    className="add-to-cart-button"
                    onClick={() => onClickHandler(inventoryItem)}
                >
                    ADD TO CART
                </button>
            </li>
        )
    }

    if (allProducts.length === 0) {
        return <p id='error-wrapper'> Sorry, no products are currently available... </p>;
    };

    return (
        <ul id='inventory-container'>
            {
                allProducts?.map(product => createInventoryItem(product, currencyFilter))
            }
        </ul>
    );
}

export default Inventory;

