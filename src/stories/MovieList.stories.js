import React from "react";
import MoviesList from "../components/Movies/MovieList";
import moviesData from "../data/movies.json";

export default {
  title: "MoviesList",
  component: MoviesList,
};

export const WithMovieData = () => <MoviesList moviesData={moviesData} />;
