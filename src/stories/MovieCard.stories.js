import React from "react";
import MovieCard from "../components/Movies/MovieCard";

const customMovie = {
  genres: ["Drama", "Romance"],
  name: "Custom Movie Title",
  id: 2,
  year: "2021",
  pictureURL: "https://image.tmdb.org/t/p/w500/tWqifoYuwLETmmasnGHO7xBjEtt.jpg",
  overview: "This is a custom movie description provided by the user.",
  film: {
    
  },
};

export default {
  title: "MovieCard",
  component: MovieCard,
};

export const CustomData = () => <MovieCard {...customMovie} />;
