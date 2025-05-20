import { configureStore } from "@reduxjs/toolkit";
import booksReducer from './slice/booksSlice'
import cartReducer from './slice/cartSlice'

export const Store = configureStore({
    reducer: {
        booksReducer,
        cartReducer
    }
})