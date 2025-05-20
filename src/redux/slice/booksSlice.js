import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllbooks = createAsyncThunk("books/getAllbooks", async () => {
    let res = await axios.get('https://www.googleapis.com/books/v1/volumes?q=%E2%80%9D%E2%80%9D')
    console.log(res.data.items);
    return res.data.items
})
const booksSlice = createSlice({
    name: "books",
    initialState: {
        books: [],
        isloading: false
    },
    reducers: {
    },
    extraReducers: (bulider) => {
        bulider.addCase(getAllbooks.pending, (state, action) => {
            state.isloading = true;
        }).addCase(getAllbooks.fulfilled, (state, action) => {
            state.isloading = false;
            state.books = action.payload;
        }).addCase(getAllbooks.rejected, (state, action) => {
            console.log("error");
        })
    }
})

export default booksSlice.reducer;