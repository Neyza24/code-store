import {createStore, combineReducers} from 'redux';
import { inventoryReducer  } from '../features/inventory/inventorySlice';
import { currencyFilterReducer } from '../features/currencyFilter/currencyFilterSlice';
import { cartReducer } from '../features/cart/cartSlice';
import { searchTermReducer } from '../features/searchTerm/searchTermSlice';



const reducers = {
    inventory: inventoryReducer,
    currencyFilter: currencyFilterReducer,
    cart: cartReducer,
    searchTerm: searchTermReducer
}

const rootReducer = combineReducers(reducers);

export const store = createStore(rootReducer);