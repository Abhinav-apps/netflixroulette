import React, { Component } from "react";
import moviesData from "../../data/movies.json";
import MovieCard from "./MovieCard";
import "./movie.css";

class MoviesList extends Component {
  render() {
    const renderingArray = moviesData.map((input) => {
      const idCount = input.id;
      return (
        <article key={input.id} id={idCount} className="moviecard">
          <MovieCard
            id={input.id}
            pictureURL={input.pictureURL}
            tagline={input.tagline}
            name={input.name}
            year={input.year}
            genres={input.genres}
            overview={input.overview}
            runtime={input.runtime}
            film={input}
          />
        </article>
      );
    });

    return (
      <>
        <section className="movieslist"> {renderingArray} </section>
      </>
    );
  }
}

export default MoviesList;
