export const addItem = (itemToAdd) => {
    return {
        type: 'cart/addItem',
        payload: itemToAdd
    }
};

export const changeItemQuantity = (name, newQuantity) => {
    return {
        type: 'cart/changeItemQuantity',
        payload: {
            name: name,
            newQuantity: newQuantity
        }
    }

}

/**
cart = {
    'hat': {
            price: 15.99, 
            quantity: 1
        },
    'T-shirt': {
            price: 15.99, 
            quantity: 2
        }
}
 */

const initialCart = {};
export const cartReducer = (cart = initialCart, action) => {
    switch(action.type) {
        
        case 'cart/addItem':{
            const {name, price} = action.payload;

            const quantity = cart[name] ? cart[name].quatity + 1 : 1;

            const newItem = {
                price,
                quantity
            }

            return {
                ...cart,
                [name]: newItem
            }
            
        }
        case 'cart/changeItemQuantity':{
            const {name, newQuantity} = action.payload;
            const itemToUpdate = cart[name];

            const updatedItem = {
                ...itemToUpdate,
                quantity: newQuantity
            }

            return {
                ...cart,
                [name]: updatedItem

            }
        }
        default:{
            return cart
        }
    }
}