import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
    name:"count",
    initialState: {
        items:[]
    },
    reducers: {
        addSum : (state,action) => {
            state.items.push(action.payload);
        },
        removeSum : (state,action) => {
            state.items.pop()
        },
        emptyItems : (state,action) => {
            state.items.length = 0;
        }
    }
})

export const {addSum,removeSum,emptyItems} = countSlice.actions;
export default countSlice.reducer;