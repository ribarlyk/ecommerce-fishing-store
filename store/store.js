// index.js

import { configureStore } from "@reduxjs/toolkit";
import stateReducer from "./cartSlice";

export const store = configureStore({
    reducer: {
        state: stateReducer,
    },
});
