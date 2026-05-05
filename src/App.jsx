import "./App.css";
import { useState, useEffect } from "react";

import SearchBar from "./components/SearchBar/SearchBar";
import MovieList from "./components/MovieList/MovieList";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

import { searchMovies, getMovieDetail } from "./services/movieService";

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [noResults, setNoResults] = useState(false);

  const buscarPeliculas = async (title) => {
    if (!title.trim()) {
      setError("Ingresá un título");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setNoResults(false);

      const data = await searchMovies(title);

      if (data.Response === "False") {
        setMovies([]);
        setNoResults(true);
        return;
      }

      setMovies(data.Search);
    } catch {
      setError("Error al buscar películas");
    } finally {
      setLoading(false);
    }
  };

  const verDetalle = async (id) => {
    try {
      setLoading(true);

      const data = await getMovieDetail(id);

      setSelectedMovie(data);
    } catch {
      setError("Error al obtener detalle");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    buscarPeliculas("Batman");
  }, []);

  return (
    <div className="app">
      <h1>Buscador de películas</h1>

      <SearchBar onSearch={buscarPeliculas} />

      {loading && <Loader />}
      {error && <ErrorMessage mensaje={error} />}
      {noResults && <p>No se encontraron resultados.</p>}

      <MovieList movies={movies} onSelect={verDetalle} />

      {selectedMovie && <MovieDetail movie={selectedMovie} />}
    </div>
  );
}

export default App;