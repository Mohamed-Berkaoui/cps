function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={movie.posterURL} alt="" />
      <h1>{movie.title}</h1>
      <p>{movie.rating}</p>
    </div>
  );
}

export default MovieCard;
