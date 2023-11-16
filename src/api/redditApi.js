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