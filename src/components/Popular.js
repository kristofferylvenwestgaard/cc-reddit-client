import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../store/popularSlice';

const Popular = () => {

const popular = useSelector((state) => state.popular);
const { isLoading, error, posts } = popular;
const dispatch = useDispatch();

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
                    posts.map(item => (<p>{item.data.title}</p>))
                }
            </div>
        </>
    );
}

export default Popular;