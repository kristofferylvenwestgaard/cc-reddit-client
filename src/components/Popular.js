import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../store/popularSlice';

const Popular = () => {

    //Uses the popular reducers and assign it to popular
    const popular = useSelector((state) => state.popular);
    //Set state object with the popular state
    const { isLoading, error, posts } = popular;
    //assign the imported useDispatch function to simpler variable
    const dispatch = useDispatch();

    //Fetching popular posts from Reddit and updates state, 1sec after the virtual DOMs initial render
    useEffect(() => {
    setTimeout(() => { 
        dispatch(fetchPosts()) 
    },1000);
    }, []);

    console.log(posts);
    
    return (
        <>
            <h2>Popular</h2>
            <p>isLoading: {isLoading}</p>
            <p>error: {error}</p>
            <p>posts: {posts.length}</p>
            <div>
                {
                    //Maps the posts state array to a new array containing a paragraph with title and an image with thumbnail.
                    posts.map(item => (
                    <>
                        <p>{item.data.title}</p>
                        {item.data.thumbnail && <img src={item.data.thumbnail} alt={item.data.title} />}
                    </>
                    ))
                }
            </div>
        </>
    );
}

export default Popular;