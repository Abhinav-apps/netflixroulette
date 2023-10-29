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
            pictureURL={input.poster_path}
            descriptionShort={input.tagline}
            name={input.title}
            year={input.release_date}
            genres={input.genres}
            overview={input.overview}
            runtime={input.runtime}
            _film={input}
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
