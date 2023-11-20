import { createSlice } from "@reduxjs/toolkit";
import { getSubReddit } from "../api/redditApi";

const initialState = {
    posts: [],
    error: false,
    isLoading: false,  
};

const subRedditSlice = createSlice({
    name: "subReddits",
    initialState,
    reducers: {
        startGetSubReddit(state) {
            state.isLoading = true;
            state.error = false;
        },
        getSubRedditSuccess(state, action) {
            state.isLoading = false;
            state.posts = action.payload;
        },
        getSubRedditFailed(state) {
            state.isLoading = false;
            state.error = true;
        }
    }
});

export const {
    setSubReddits,
    startGetSubReddit,
    getSubRedditSuccess,
    getSubRedditFailed
} = subRedditSlice.actions;

export default subRedditSlice.reducer;

export const fetchSearchResult = (searchQuery) => async (dispatch) => {
    try {
        dispatch(startGetSubReddit());
        const searchResult = await getSubReddit(searchQuery);
        dispatch(getSubRedditSuccess(searchResult.data.children));
        console.log({searchQuery, searchResult});
    } catch (error) {
        dispatch(getSubRedditFailed());
    }
}