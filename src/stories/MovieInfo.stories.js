import React from "react";
import MovieInfo from "../components/Movies/MovieInfo";

export default {
  title: "MovieInfo",
  component: MovieInfo,
};

export const CustomInfo = () => (
  <MovieInfo
    name="Custom Movie Title"
    year="2010"
    description="This is a custom movie description provided by the user."
  />
);
