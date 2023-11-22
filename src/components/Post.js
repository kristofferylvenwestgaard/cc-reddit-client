import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useLocation } from "react-router-dom";

const Post = () => {
    // //Uses the popular reducers and assign it to popular
    // const searchResult = useSelector((state) => state.subReddits);
    // //Set state object with the search state
    // const { isLoading, error, posts } = searchResult;
    // console.log({isLoading, error, posts});

    const location = useLocation();
    const post = location.state;
    console.log(post);

    return (
        <>
            <h2 className="text-h2 mb-8">{post.item.data.title}</h2>
            <p className="truncate mt-4">{post.item.data.selftext}</p>
        </>
    )
}

export default Post;