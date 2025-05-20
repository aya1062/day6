
import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
    },
    reducers: {
        addToCart: (state, action) => {
            let index = state.cart.findIndex((item) => item.id == action.payload.id);
            if (index > -1) {
                state.cart[index].q = state.cart.q + 1;
            }
            else
                state.cart.push({ ...action.payload, q: 1 });
            console.log(state);
        },
        removeFromCart: (state, action) => {
            state.cart.filter((item) => item.id != action.payload);
        }
    }
})


export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer
