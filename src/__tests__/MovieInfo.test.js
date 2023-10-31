import React from "react";
import { render } from "@testing-library/react";
import MovieInfo from "../components/Movies/MovieInfo";

describe("MovieInfo Component", () => {
  const mockProps = {
    name: "Movie Title",
    year: "2023",
    description: "Description of the movie goes here.",
  };

  it("renders MovieInfo component with provided props", () => {
    const { getByText } = render(<MovieInfo {...mockProps} />);

    const nameElement = getByText(mockProps.name);
    const buttonElement = getByText(mockProps.year);
    const descriptionElement = getByText(mockProps.description);

    expect(nameElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });
});
