import {createStore, combineReducers} from 'redux';
import { inventoryReducer  } from '../features/inventory/inventorySlice';
import { currencyFilterReducer } from '../features/currencyFilter/currencyFilterSlice';



const reducers = {
    inventory: inventoryReducer,
    currencyFilter: currencyFilterReducer,
}

const rootReducer = combineReducers(reducers);

export const store = createStore(rootReducer);