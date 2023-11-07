import React from "react";
import { render, screen } from "@testing-library/react";
import MovieDetails from "../components/Movies/MovieDetails";

describe("MovieDetails Component", () => {
  const movieInfo = {
    pictureURL: "https://example.com/poster.jpg",
    name: "Movie Name",
    year: 2023,
    vote_average: 8.0,
    rating: 8.9,
    runtime: "2h 30min",
    overview: "This is a test movie description.",
  };

  it("renders MovieDetails component with provided props", () => {
    render(<MovieDetails movieInfo={movieInfo} />);

    const imgElement = screen.getByRole("img");
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src", movieInfo.pictureURL);

    const nameElement = screen.getByRole("heading", { name: movieInfo.name });
    expect(nameElement).toBeInTheDocument();

    const releaseYearElement = screen.getByText(
      `Release Year: ${movieInfo.year}`
    );
    expect(releaseYearElement).toBeInTheDocument();

    const ratingElement = screen.getByText(`Rating: ${movieInfo.vote_average}`);
    expect(ratingElement).toBeInTheDocument();

    const durationElement = screen.getByText(`Duration: ${movieInfo.runtime}`);
    expect(durationElement).toBeInTheDocument();

    const descriptionElement = screen.getByText(movieInfo.overview);
    expect(descriptionElement).toBeInTheDocument();
  });
});
