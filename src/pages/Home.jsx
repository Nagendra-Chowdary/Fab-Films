import { useState } from "react";
import MovieCard from "../components/MovieCard";
import "../css/Home.css"
import movieslist from "../services/movies.json"
// import { searchMovies } from "../services/api";
// import { getPopularMovies } from "../services/api";
export default function Home() {

    const [movies,setMovies]=useState(movieslist);
    const [searchQuery,setQuery]=useState("");
    // const [error,setError]=useState(null);
    // const [loading,setLoading]=useState(true);
    // console.log(error);
    // console.log(loading);
    
    // useEffect(()=>{
    //     const loadPopularMovies=async()=>{

        
    //     try{
    //         console.log("loading");
    //         const popularMovies=await getPopularMovies();
    //         setMovies(popularMovies);
           
    //     }
    //     catch(err){
    //         console.log(err);
    //         setError("Failed to load movies.....");
            
    //     }
    //     finally{
    //         setLoading(false);

    //     }
    //     }
    //     loadPopularMovies();
    // },[]);



    const handleSubmit= async(e)=>{
        e.preventDefault();
    //     if(!searchQuery.trim())return
    //     if(loading)return   //won't allow us to search while we are already searching for something.
    //     setLoading(true)
    //    try{
    //       const searchResults=await searchMovies(searchQuery)
    //       setMovies(searchResults)
    //       setError(null)
    //    }catch(err){
    //       console.log(err);
    //       setError("Failed to load movies......");  if(!searchQuery.trim())return
    //     if(loading)return   //won't allow us to search while we are already searching for something.
    //     setLoading(true)
    //    try{
    //       const searchResults=await searchMovies(searchQuery)
    //       setMovies(searchResults)
    //       setError(null)
    //    }catch(err){
    //       console.log(err);
    //       setError("Failed to load movies......");
          
    //    }finally{
    //     setLoading(false);
    //    }

          
    //    }finally{
    //     setLoading(false);
    //    }

        // setLoading(true)
    //   setQuery("")
    }
    const searchChange=(e)=>{
    setQuery(e.target.value);
    // setMovies(movies.filter((movie)=>{
    //     return 
    // }))
    }
    return(
        <div className="home">
                <form onSubmit={handleSubmit} className="search-form">
                <input type="text" placeholder="search for movies..." 
                className="search-input" 
                value={searchQuery}
                onChange={searchChange}
                />
                <button type="submit" className="search-button">search</button>
                </form>
            
            <div className="movies-grid">
                {movies.map(movie=>{
                    return(
                        // <MovieCard movie={movie} key={movie.id} />
                        (movie.titleText.text).toLowerCase().startsWith(searchQuery)&&<MovieCard movie={movie} key={movie.id}/>
                    )})
                }
            </div>
            
            
            </div>)
}

