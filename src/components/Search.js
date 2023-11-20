import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSearchResult } from "../store/subRedditSlice";

const Search = () => {
    // let searchInput = document.getElementById("searchField");
    const [searchTerm, setSearchTerm] = useState("");

    //Uses the popular reducers and assign it to popular
    const searchResult = useSelector((state) => state.subReddits);
    //Set state object with the search state
    const { isLoading, error, posts } = searchResult;
    console.log({isLoading, error, posts});
    //assign the imported useDispatch function to simpler variable
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        //Send submit value as prop to fetchSearchResult and update SearchResult state
        if(searchTerm) {
            //Wait for async search result from Reddit
            //Send search to fetchSearchResult 
            console.log(searchTerm);
            dispatch(fetchSearchResult(searchTerm));
            setSearchTerm("");
        }
    }

    return (
        <form className="w-2/4 flex gap-4" action="#" method="get">
            <input type="input" id="searchField" className="rounded-xl pl-4 pr-4 h-12 border mb-8 w-4/5" name="search" placeholder="Search for community.."  onChange={handleChange} />
            <input type="submit" className="rounded-xl pl-4 pr-4 h-12 bg-red-500 text-white w-1/5 font-semibold" value="Search" onClick={handleSubmit} />
        </form>
    );
}

export default Search;