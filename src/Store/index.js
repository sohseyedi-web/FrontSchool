import { configureStore } from "@reduxjs/toolkit";
import authReducers from "./reducers/authReducers";
import cartReducers from "./reducers/cartReducers";

const Store = configureStore({
    reducer: {
        cart: cartReducers,
        auth: authReducers
    }
})

export default Store;