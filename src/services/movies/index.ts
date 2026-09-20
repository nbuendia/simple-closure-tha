import { movieApi, ApiResponse, Movies, Filters } from "./moviesApi";

export { movieApi };
export type {ApiResponse, Movies, Filters};

export const { useGetMoviesQuery, useGetMovieGenresQuery } = movieApi;
