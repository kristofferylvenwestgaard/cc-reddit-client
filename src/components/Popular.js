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
            {/* <p>isLoading: {isLoading}</p>
            <p>error: {error}</p>
            <p>posts: {posts.length}</p> */}

            {
                //Maps the posts state array to a new array containing a paragraph with title and an image with thumbnail.
                posts.map(item => (
                <>
                    <div className='w-2/4 mb-8 p-4 rounded-lg drop-shadow-md bg-white border-slate-100 border'>
                        <p className="text-label font-medium text-slate-600 mb-4 p-1 rounded bg-red-100 inline-block lowercase">{item.data.subreddit}</p>
                        <h3 className="text-h6 mb-2 truncate">{item.data.title}</h3>
                        <p className="text-label text-slate-500">{item.data.author}</p>
                        { item.data.selftext && <p className="truncate mt-4">{item.data.selftext}</p> }
                    </div>
                </>
                ))
            }
        </>
    );
}

export default Popular;