
const BASE_URL =  "https://api.tvmaze.com";

const apiGet =async (quesryString)=>{
    const response = await fetch(`${BASE_URL}${quesryString}`);
    const body = await response.json();
    return body;
}

export const searchForShows = (query)=>apiGet(`/search/shows?q=${query}`);