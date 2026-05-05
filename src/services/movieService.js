import axios from "axios";

const API_KEY = "6cd601fa";
const BASE_URL = "https://www.omdbapi.com/";

export const searchMovies = async (title) => {
  const response = await axios.get(BASE_URL, {
    params: {
      apikey: API_KEY,
      s: title,
    },
  });

  return response.data;
};

export const getMovieDetail = async (imdbID) => {
  const response = await axios.get(BASE_URL, {
    params: {
      apikey: API_KEY,
      i: imdbID,
      plot: "full",
    },
  });

  return response.data;
};