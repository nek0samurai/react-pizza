import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

export const fetchPizzas = createAsyncThunk(
    'pizza/fetchPizzasStatus',
    async (params) => {
        const {sortBy, order, search, category} = params
        const { data } = await axios.get(
            `https://635128703e9fa1244e56f22d.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}${search}`);
        return data
    }
)

const initialState = {
    items: [],
    status: 'loading'
}


const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        addItem(state, action){
            state.items = action.payload;
        }
    },
    extraReducers: {
        [fetchPizzas.pending]: (state) => {
            state.items = []
            state.status = 'loading'
        },
        [fetchPizzas.fulfilled]: (state, action) => {
            state.items = action.payload
            state.status = 'success'
        },
        [fetchPizzas.rejected]: (state, action) => {
            state.status = 'error'
            state.items = []
        },
    },
})


export const { addItem } = pizzaSlice.actions;

export default pizzaSlice.reducer