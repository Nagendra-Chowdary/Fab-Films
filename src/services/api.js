const API_KEY="c4f8d079b343ad7a1698d342eb31c929";
const BASE_URL="https://api.themoviedb.org/3";

export const getPopularMovies=async ()=>{
    const response= await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=c4f8d079b343ad7a1698d342eb31c929`);
    const data= await response.json()
    return data.results
}
export const searchMovies=async (query)=>{
    const response=await fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&api_key=c4f8d079b343ad7a1698d342eb31c929`);
    const data=await response.json();
    return data.results;
}