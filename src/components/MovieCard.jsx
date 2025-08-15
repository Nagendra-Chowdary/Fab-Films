export default function MovieCard({ movie }) {
  function handleClick() {}
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.url} alt={movie.title} width={200} height={300} />
        <div className="movie-overlay">
          <button className="favourite-btn" onClick={handleClick}>
            <img
              src="/heart-angle-svgrepo-com.svg"
              alt="fav"
              width={20}
              height={20}
            />
            {/* ❤️ */}
          </button>
        </div>

      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
}
