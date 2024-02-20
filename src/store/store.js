import {createStore, combineReducers} from 'redux';
import { inventoryReducer  } from '../features/inventory/inventorySlice';
import { currencyFilterReducer } from '../features/currencyFilter/currencyFilterSlice';
import { cartReducer } from '../features/cart/cartSlice';



const reducers = {
    inventory: inventoryReducer,
    currencyFilter: currencyFilterReducer,
    cart: cartReducer
}

const rootReducer = combineReducers(reducers);

export const store = createStore(rootReducer);