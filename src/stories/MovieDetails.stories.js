import React from "react";
import MovieDetails from "../components/Movies/MovieDetails";

const customMovieInfo = {
  pictureURL: "https://image.tmdb.org/t/p/w500/tWqifoYuwLETmmasnGHO7xBjEtt.jpg",
  name: "Custom Movie Title",
  year: 2020,
  vote_average: 7.2,
  runtime: "2h 30m",
  overview: "This is a custom movie description provided by the user.",
};

export default {
  title: "MovieDetails",
  component: MovieDetails,
};

export const CustomInfo = () => <MovieDetails movieInfo={customMovieInfo} />;
