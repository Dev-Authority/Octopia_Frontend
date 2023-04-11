import { createSlice } from "@reduxjs/toolkit";

export const SubscriptionSlice = createSlice({
    name : "SubscriptionRTK",
    initialState: {value : {name:"mehdi"}},
    reducers:{
        SubscriptionData: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const {SubscriptionData} = SubscriptionSlice.actions;

export default SubscriptionSlice.reducer;