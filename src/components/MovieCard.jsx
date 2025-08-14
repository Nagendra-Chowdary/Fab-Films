export default function MovieCard({movie}){
    function handleClick(){

    }
return(
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.url} alt={movie.title} width={300} height={500}/>
        <div className="movie-overlay">
            <button className="favourite-btn" onClick={handleClick}>
                <img src="/heart-angle-svgrepo-com.svg" alt="fav" width={50} height={50}/>
                </button>
        </div>
      </div>
    </div>
)
}