import { createSlice } from "@reduxjs/toolkit";
import { getPopular } from "../api/redditApi";

const initialState = {
    posts: [],
    error: false,
    isLoading: false,
}

const popularSlice = createSlice({
    name: "popularPosts",
    initialState,
    reducers: {
        setPosts(state, action) {
            state.posts = action.payload;
        },
        startGetPosts(state) {
            state.isLoading = true;
            state.error = false;
        },
        getPostsSuccess(state, action) {
            state.isLoading = false;
            state.posts = action.payload;
        },
        getPostsFailed(state) {
            state.isLoading = false;
            state.error = true;
        },
    }
});

export const {
    getPostsFailed,
    getPostsSuccess,
    startGetPosts
  } = popularSlice.actions;

export default popularSlice.reducer;

// This is a Redux Thunk that gets posts from a subreddit.
export const fetchPosts = () => async (dispatch) => {
    try {
      dispatch(startGetPosts());
      const posts = await getPopular();
      dispatch(getPostsSuccess(posts.data.children));
    } catch (error) {
      dispatch(getPostsFailed());
    }
  };