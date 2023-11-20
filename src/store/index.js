import { combineReducers, configureStore } from "@reduxjs/toolkit";
import popularReducer from "./popularSlice";
import subRedditReducer from "./subRedditSlice";

// Store - Keep and handle global states of the app
const store = configureStore({
    reducer: combineReducers({
        //Assign the popularReducer to the popular object
        popular: popularReducer,
        subReddits: subRedditReducer
    })
})

export default store;