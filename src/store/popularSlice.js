import { createSlice } from "@reduxjs/toolkit";
import { getPopular } from "../api/redditApi";

//Initial state for the popular feed
const initialState = {
    posts: [],
    error: false,
    isLoading: false,
}

//Popular slice that maintain the state of popular posts
const popularSlice = createSlice({
    //Slicename
    name: "popularPosts",
    //State referring to constant initialState set above.
    initialState,
    //Reducers use actions to make updates to the state.
    reducers: {
        //Not used at the moment,
        setPosts(state, action) {
            state.posts = action.payload;
        },

        //Takes a state as parameter and sets isLoading state to true
        startGetPosts(state) {
            state.isLoading = true;
            state.error = false;
        },

        //Takes a state and action as parameter and sets isLoading state to false because getPost is successful - and then sets the posts state array = action.payload (payload contain the data from the action to add in state)
        getPostsSuccess(state, action) {
            state.isLoading = false;
            state.posts = action.payload;
        },

        //Takes a state as parameter and sets isLoading false and error state to true because the post failed to be fetched.
        getPostsFailed(state) {
            state.isLoading = false;
            state.error = true;
        },
    }
});

//Exports the reducers, amnd generates actions for the popularSlice
export const {
    getPostsFailed,
    getPostsSuccess,
    startGetPosts
  } = popularSlice.actions;

export default popularSlice.reducer;

// This is a Redux Thunk that gets popular posts asynchronous from a Reddit.
export const fetchPosts = () => async (dispatch) => {
    try {
        dispatch(startGetPosts());
        const posts = await getPopular();
        dispatch(getPostsSuccess(posts.data.children));
    } catch (error) {
        dispatch(getPostsFailed());
    }
  };