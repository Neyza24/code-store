import {createStore, combineReducers} from 'redux';
import { inventoryReducer  } from '../features/inventory/inventorySlice';



const reducers = {
    inventory: inventoryReducer,
}

const rootReducer = combineReducers(reducers);

export const store = createStore(rootReducer);