import { configureStore } from "@reduxjs/toolkit";
import AuthorizationSlices from "./reducers/LoginSlices";


const store = configureStore({
    reducer: {
        user: AuthorizationSlices.reducer
    }
})

export default store;