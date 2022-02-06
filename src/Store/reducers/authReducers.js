
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem("cart")) : null
    },
    reducers: {
        login(state, actions) {
            state.user = actions.payload;
            localStorage.setItem("user", JSON.stringify(state.user))
        },
        logOut(state) {
            state.user = null;
            localStorage.clear();
        }
    }
})

export const { login, logOut } = authSlice.actions;

export default authSlice.reducer