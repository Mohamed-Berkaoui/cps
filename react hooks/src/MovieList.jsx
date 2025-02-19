import MovieCard from "./MovieCard";

function MovieList({ movies, setMovies }) {
  function handleSubmit(e) {
    e.preventDefault();
    const newMovie = {
      title: e.target.title.value,
      posterURL: e.target.posterURL.value,
      rating: e.target.rating.value,
      description: e.target.description.value,
    };
    setMovies([...movies,newMovie])
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "15px",
        }}
      >
        {movies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </div>

      <form action="" onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="title" />
        <input type="text" name="posterURL" placeholder="posterURL" />
        <input type="number" name="rating" placeholder="rating" />
        <input type="text" name="description" placeholder="description" />
        <button type="submit">submit</button>
      </form>
    </>
  );
}

export default MovieList;
