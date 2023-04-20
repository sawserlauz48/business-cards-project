import { configureStore } from "@reduxjs/toolkit";

import darkThemeReducer from "./darkTheme";
import authReducer from "./auth";
import bizAuthReducer from "./bizAuth";
import adminAuthReducer from "./adminAuth";

const store = configureStore({
    reducer: {
        darkThemeSlice: darkThemeReducer,
        authSlice: authReducer,
        bizAuthSlice: bizAuthReducer,
        adminAuthSlice: adminAuthReducer,
    },
});

export default store;
