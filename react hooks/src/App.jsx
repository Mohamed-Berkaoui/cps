import { useState } from "react";
import Filter from "./Filter";
import MovieList from "./MovieList";

import m from "./movies";

function App() {
  const [movies, setMovies] = useState(m);
  const [search, setSearch] = useState({ title: "", rating: "" });
  let moviesToDisplay = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.title.toLowerCase())
  );
  moviesToDisplay=moviesToDisplay.filter(movie=>movie.rating >= (+search.rating))
  return (
    <div>
      <Filter setSearch={setSearch} />
      <MovieList movies={moviesToDisplay} setMovies={setMovies} />
    </div>
  );
}

export default App;
