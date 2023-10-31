import React from "react";
import { getAllByRole, render } from "@testing-library/react";
import MoviesList from "../components/Movies/MovieList";
import moviesData from "../data/movies.json";

describe("MoviesList component", () => {
  it("renders movie cards based on movie data", () => {
    const { container } = render(<MoviesList />);
    const moviesList = container.querySelector(".movieslist");

    expect(moviesList).toBeInTheDocument();
    expect(moviesList.children).toHaveLength(moviesData.length);
  });

  it("correctly passes movie data to MovieCard components", () => {
    const { getAllByRole } = render(<MoviesList />);

    const movieCards = getAllByRole("article");
    expect(movieCards.length).toEqual(moviesData.length);

    movieCards.forEach((movieCard, index) => {
      const movieData = moviesData[index];
      expect(movieCard).toHaveTextContent(movieData.name);
    });
  });
});
