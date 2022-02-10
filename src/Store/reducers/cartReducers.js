import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const initialState = {
    cartItems: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
    courseItems: localStorage.getItem('panel') ? JSON.parse(localStorage.getItem("panel")) : [],
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
            toast.warning('Added to cart')
            localStorage.setItem('cart', JSON.stringify(state.cartItems))
        },
        deCreaseToCart(state, actions) {
            const filterItem = state.cartItems.filter(i => i.id !== actions.payload.id)
            state.cartItems = filterItem;
            toast.danger('Course deleted')
            localStorage.setItem('cart', JSON.stringify(state.cartItems))

        },
        AllCourses(state) {
            const courseList = [...state.cartItems]
            state.courseItems = courseList;
            localStorage.removeItem('cart')
            toast.success('Payment was successful')
            localStorage.setItem('panel', JSON.stringify(state.courseItems))

        }
    }
})

export const { addToCart, deCreaseToCart, AllCourses } = cartSlice.actions

export default cartSlice.reducer;