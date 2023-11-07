import React from "react";
import MovieImage from "../components/Movies/MovieImage";
import customMovieImage from "../../public/logo192.png";

const customFilm = {
  title: "Custom Movie Title",
  year: "2020",
  description: "This is a custom movie description provided by the user.",
};

export default {
  title: "MovieImage",
  component: MovieImage,
};

export const CustomImage = () => (
  <MovieImage img={customMovieImage} filmTitle={customFilm.title} film={customFilm} />
);
