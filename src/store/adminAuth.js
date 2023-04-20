import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAdmin: false,
    payload: null,
};

const adminAuthSlice = createSlice({
    name: "adminAuth",
    initialState,
    reducers: {
        admin(state, action) {
            if (!action || !action.payload.isAdmin) {
                return;
            }
            state.isAdmin = true;
            state.payload = action.payload.isAdmin;
        },
        notadmin(state) {
            state.isAdmin = false;
            state.payload = null;
        },
    },
});

export const adminAuthActions = adminAuthSlice.actions;

export default adminAuthSlice.reducer;
