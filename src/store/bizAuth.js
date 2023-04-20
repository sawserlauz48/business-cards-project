import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isBiz: false,
    payload: null,
};

const bizAuthSlice = createSlice({
    name: "bizAuth",
    initialState,
    reducers: {
        biz(state, action) {
            if (!action || !action.payload.biz) {
                return;
            }
            state.isBiz = true;
            state.payload = action.payload.biz;
        },
        notBiz(state) {
            state.isBiz = false;
            state.payload = null;
        },
    },
});

export const bizAuthActions = bizAuthSlice.actions;

export default bizAuthSlice.reducer;
