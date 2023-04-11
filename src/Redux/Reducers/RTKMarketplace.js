import { createSlice } from "@reduxjs/toolkit";

export const marketplaceSlice = createSlice({
    name : "marketplacesRTK",
    initialState: {value : { name:"mehdi" }},
    reducers:{
        MarketData: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const {MarketData} = marketplaceSlice.actions;

export default marketplaceSlice.reducer;