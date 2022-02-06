import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartItems: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, actions) {
            const itemIndex = state.cartItems.findIndex(i => i.id === actions.payload.id)
            if (itemIndex >= 0) {
                const updatedItem = { ...state.cartItems[itemIndex] }
                updatedItem.quantity++;
                state.cartItems[itemIndex] = updatedItem;

            } else {
                let tempProduct = { ...actions.payload, quantity: 1 }
                state.cartItems.push(tempProduct);
            }

            localStorage.setItem('cart', JSON.stringify(state.cartItems))
        },
        deCreaseToCart(state, actions) {
            const itemIndex = state.cartItems.findIndex(i => i.id === actions.payload.id)

        }
    }
})

export const { addToCart, deCreaseToCart } = cartSlice.actions

export default cartSlice.reducer;