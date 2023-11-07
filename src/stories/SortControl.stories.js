import React from "react";
import SortControl from "../components/SortAndGenreControl/SortControl";

export default {
  title: "SortControl",
  component: SortControl,
};

export const CustomSort = () => (
  <SortControl
    currentSelection="title"
    onSortChange={(sort) => console.log(`Selected sort: ${sort}`)}
  />
);
