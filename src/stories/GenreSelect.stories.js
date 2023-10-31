import React, { useState } from "react";
import GenreSelect from "../components/SortAndGenreControl/GenreSelect";

export default {
  title: "GenreSelect",
  component: GenreSelect,
};

const Template = (args) => {
  const [selectedGenre, setSelectedGenre] = useState(
    args.selectedGenre || null
  );

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
  };

  return (
    <GenreSelect
      {...args}
      selectedGenre={selectedGenre}
      onSelect={handleGenreSelect}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  genres: ["All", "Documentry", "Comedy", "Horror", "Crime"],
  selectedGenre: "All",
};