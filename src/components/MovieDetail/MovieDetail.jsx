import "./MovieDetail.css";

const MovieDetail = ({ movie }) => {
  return (
    <div className="movie-detail">
      <h2>{movie.Title || "Sin título"}</h2>

      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/300x450"
        }
        alt={movie.Title}
      />

      <p><strong>Año:</strong> {movie.Year || "No disponible"}</p>
      <p><strong>Género:</strong> {movie.Genre || "No disponible"}</p>
      <p><strong>Director:</strong> {movie.Director || "No disponible"}</p>
      <p><strong>Actores:</strong> {movie.Actors || "No disponible"}</p>
      <p><strong>Sinopsis:</strong> {movie.Plot || "No disponible"}</p>
      <p><strong>Duración:</strong> {movie.Runtime || "No disponible"}</p>
      <p><strong>Idioma:</strong> {movie.Language || "No disponible"}</p>
      <p><strong>País:</strong> {movie.Country || "No disponible"}</p>
      <p><strong>IMDb:</strong> {movie.imdbRating || "No disponible"}</p>
    </div>
  );
};

export default MovieDetail;