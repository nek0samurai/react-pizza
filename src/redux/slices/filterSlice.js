import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    searchValue: '',
    categoryId: 0,
    sort: {
        name: 'популярности',
        sortProperty: 'rating'
    }
}

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategoryId(state, action){
            state.categoryId = action.payload;
        },
        setSearchValue(state, action){
            state.searchValue = action.payload;
        },
        setSort(state, action){
            state.sort = action.payload;
        },
    },
})

export const filterState = (state) => state.filter
export const sortProperty = (state) => state.filter.sort.sortProperty


export const { setCategoryId, setSort, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer