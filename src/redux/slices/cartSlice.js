import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    totalPrice: 0,
    items: [],
}

const cartSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        addItems(state, action){
            const findItem = state.items.find(obj => obj.id === action.payload.id)

            if(findItem){
                findItem.count++
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1
                })
            }
            
            state.totalPrice = state.items.reduce((sum, obj) => {
                console.log(obj.price, obj.count, sum);
                return obj.count * obj.price + sum;
            }, 0)
        },
        minusItem(state, action){
            const findItem = state.items.find(obj => obj.id === action.payload)

            if(findItem){
                findItem.count--;
            } 
            
        },
        removeItems(state, action){
            state.items = state.items.filter((obj) => obj.id !== action.payload)
            state.totalPrice = state.items.reduce((sum, obj) => {
                return  obj.count * obj.price - sum
            }, 0)
        },
        clearItems(state, action){
            state.items = [];
            state.totalPrice = 0
        }
    },
})

export const selectCart = (state) => state.cart


export const { addItems, removeItems, minusItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer



