// API Endpoint
const endpoint = "https://www.reddit.com/";

//Async fetch call to endpoint and awaiting response and encoding to json
export const getPopular = async () => {
    const response = await fetch(`${endpoint}r/popular.json`)
    if(response.ok) {
        const json = await response.json();
        return json;
    } else {
        throw response;
    }
}


export const getSubReddit = async (searchQuery) => {
    const response =  await fetch(`${endpoint}search.json?q=${searchQuery}`)
    if(response.ok){
        const json = await response.json();
        return json;
    } else {
        throw response;
    }
} 