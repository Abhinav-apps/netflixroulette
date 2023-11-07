import React from "react";
import SortAndGenreControl from "../components/SortAndGenreControl/SortAndGenreControl";

const customGenres = ["Action", "Adventure", "Romance", "Thriller"];
const customSelectedGenre = "Adventure";
const customSort = "Year (Newest First)";

export default {
  title: "SortAndGenreControl",
  component: SortAndGenreControl,
};

export const CustomData = () => (
  <SortAndGenreControl
    genres={customGenres}
    selectedGenre={customSelectedGenre}
    onSelect={(genre) => console.log(`Selected genre: ${genre}`)}
    currentSort={customSort}
    onSortChange={(sort) => console.log(`Selected sort: ${sort}`)}
  />
);
