import { combineReducers, configureStore } from "@reduxjs/toolkit";
import popularReducer from "./popularSlice";

// Store - Keep and handle global states of the app
const store = configureStore({
    reducer: combineReducers({
        //Assign the popularReducer to the popular object
        popular: popularReducer
    })
})

export default store;