import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";
//Import searchResultState

const SearchResult = () => {
     //Uses the popular reducers and assign it to popular
     const searchResult = useSelector((state) => state.subReddits);
     //Set state object with the search state
     const { isLoading, error, posts } = searchResult;
     console.log({isLoading, error, posts});

    return (
        <>  
            <h2 className="text-h2 mb-8">Results</h2>
            {
                //Maps the posts state array to a new array containing a paragraph with title and an image with thumbnail.
                posts.map(item => (
                    <div className='w-2/4 mb-8 p-4 rounded-lg drop-shadow-md bg-white border-slate-100 border' key={item.data.id}>
                        <p className="text-label font-medium text-slate-600 mb-4 p-1 rounded bg-red-100 inline-block lowercase">{item.data.subreddit}</p>
                        <h3 className="text-h6 mb-2 truncate"><Link to={`../post/${item.data.id}`} state={{item}}>{item.data.title}</Link></h3>
                        <p className="text-label text-slate-500">{item.data.author}</p>
                        <p className="truncate mt-4">{item.data.selftext}</p>
                    </div>
            ))}
        </>
    );
}

export default SearchResult;