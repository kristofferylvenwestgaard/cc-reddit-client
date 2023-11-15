import { combineReducers, configureStore } from "@reduxjs/toolkit";
import popularReducer from "./popularSlice";

const store = configureStore({
    reducer: combineReducers({
        popular: popularReducer
    })
})

export default store;