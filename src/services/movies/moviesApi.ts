import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Movies {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[]; 
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: false,
  vote_average: number;
  vote_count: number;
}

export interface ApiResponse {
  page: number;
  results: Movies[],
  total_pages: number;
  total_results: number;
}

export interface Filters {
  sort_by?: "original_title.asc" 
  | "original_title.desc" 
  | "popularity.asc"
  | "popularity.desc"
  | "revenue.asc"
  | "revenue.desc"
  | "primary_release_date.asc"
  | "title.asc"
  | "title.desc"
  | "primary_release_date.desc"
  | "vote_average.asc"
  | "vote_average.desc"
  | "vote_count.asc"
  | "vote_count.desc",
  with_genres?: string,
}

interface Genres {
  id: number,
  name: string,
}

export interface GenreList {
  genres: Genres[],
}

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const movieApi = createApi({
  reducerPath: "movies",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3/" }),
  endpoints: (builder) => ({
    getMovies: builder.query<ApiResponse, Filters | undefined | null>({
      query: (filters) => {
        const params = filters && Object.entries(filters)
        .map(([key, value]) => `${key}=${value}`).join("&");

        let path = `discover/movie?api_key=${API_KEY}`;
        if (params) path += `&${params}`;
        
        return path;
      },
    }),
    getMovieGenres: builder.query<Genres, void>({
      query: () => `genre/movie/list?api_key=${API_KEY}`,
    }),
  }),
});
