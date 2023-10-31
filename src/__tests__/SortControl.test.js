import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import SortControl from "../components/SortAndGenreControl/SortControl";

describe("SortControl Component", () => {
  const currentSelection = "releaseDate";
  const onSortChange = jest.fn();

  it("renders SortControl component with provided props", () => {
    render(
      <SortControl
        currentSelection={currentSelection}
        onSortChange={onSortChange}
      />
    );

    const sortLabel = screen.getByText("Sort by :");
    expect(sortLabel).toBeInTheDocument();

    const sortSelect = screen.getByRole("combobox");
    expect(sortSelect).toBeInTheDocument();

    const options = screen.getAllByRole("option");
    expect(options).toHaveLength(2);
  });

  it("triggers onSortChange function on selection change", () => {
    render(
      <SortControl
        currentSelection={currentSelection}
        onSortChange={onSortChange}
      />
    );

    const sortSelect = screen.getByRole("combobox");
    fireEvent.change(sortSelect, { target: { value: "title" } });

    expect(onSortChange).toHaveBeenCalledWith("title");
  });
});
