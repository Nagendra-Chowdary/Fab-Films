import { useState } from "react";
import MovieCard from "../components/MovieCard";
import "../styles/home.css"

export default function Home() {
    const movies=[
        {id:1 ,title:"1mov",url:'Screenshot from 2024-05-23 19-48-44.png',release_date:2017},
        {id:2 ,title:"2mov",url:'Screenshot from 2024-05-23 19-48-44.png',release_date:2017},
        {id:3 ,title:"3movie",url:'Screenshot from 2024-05-23 19-48-44.png',release_date:2017},
        {id:4 ,title:"2mov",url:'Screenshot from 2024-05-23 19-48-44.png',release_date:2017},
        {id:5 ,title:"3movie",url:'Screenshot from 2024-05-23 19-48-44.png',release_date:2017},
        {id:6 ,title:"2mov",url:'Screenshot from 2024-05-23 19-48-44.png',release_date:2017},
        {id:7 ,title:"3movie",url:'Screenshot from 2024-05-23 19-48-44.png',release_date:2017},
    ];

    const handleSubmit=(e)=>{
        e.preventDefault();
    //   setQuery(e.target.value)
    }
    const searchChange=(e)=>{
    setQuery(e.target.value);
    }
    const [searchQuery,setQuery]=useState("");
    return(
        <div className="home">
            <div className="search-bar">
                <form onSubmit={handleSubmit} className="search-form">
                <input type="text" placeholder="search for movies..." 
                className="search-input" 
                value={searchQuery}
                onChange={searchChange}
                />
                <button type="submit" className="search-btn">search</button>
                </form>
            </div>
            <div className="movie-grid">
                {movies.map(movie=>{
                    return(
                        <MovieCard movie={movie} />
                        // movie.title.toLowerCase().startsWith(searchQuery)&&<MovieCard movie={movie} />
                    )})
                }
                
                
            </div>
        </div>
    )
}

