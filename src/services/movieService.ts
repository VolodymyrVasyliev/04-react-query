import axios from "axios";
import type { Movie } from "../types/movie";

interface FetchMoviesResponse {
  results: Movie[];
  total_pages: number;
  page: number;
}

export const fetchMovies = async (
  query: string,
  page: number
): Promise<FetchMoviesResponse> => {
  const myKey = import.meta.env.VITE_API_KEY;

  axios.defaults.baseURL = "https://api.themoviedb.org/3";

  const response = await axios.get<FetchMoviesResponse>("/search/movie", {
    params: {
      query,
      page,
    },
    headers: {
      Authorization: `Bearer ${myKey}`,
      accept: "application/json",
    },
  });
  // console.log( response);

  return response.data;
};
