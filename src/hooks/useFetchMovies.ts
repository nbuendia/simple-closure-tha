import { useEffect, useState } from "react";

import { Filters, Movies, useGetMoviesQuery } from "@/services/movies";

export function useFetchMovies(filters?: Filters | null) {
  const {
    data: movieData,
  } = useGetMoviesQuery(filters);
  const [movies, setMovies] = useState<Movies[]>();

  useEffect(() => {
    if (movieData && movieData.results) setMovies(movieData.results);
  });

  return {
    movies,
  };
}
