const endpoint = "https://www.reddit.com/";
export const getPopular = async () => {
    const response = await fetch(`${endpoint}r/popular.json`)
    if(response.ok) {
        const json = await response.json();
        return json;
    } else {
        throw response;
    }
}