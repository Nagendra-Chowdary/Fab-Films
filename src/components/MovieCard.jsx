import  "../css/MovieCard.css";

export default function MovieCard({ movie }) {
  console.log(movie.primaryImage);
  
  function handleClick() {}
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={`${(!movie.primaryImage)?"https://m.media-amazon.com/images/M/MV5BNzdhZmY2OTQtYWI4OC00ZThkLTlhZjAtNzE2YzRjM2Q5YjJlXkEyXkFqcGc@._V1_.jpg":movie.primaryImage.url}`} alt={movie.titleText.text} width={200} height={300} />
        <div className="movie-overlay">
          <button className="favourite-btn" onClick={handleClick}>
           
          ❤️
          </button>
        </div>

      </div>
      <div className="movie-info">
        <h3>{movie.titleText.text}</h3>
        <p>{movie.releaseDate.year}</p>
      </div>
    </div>
  );
}
