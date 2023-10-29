import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactImageFallback from "react-image-fallback";
import placeholder from "../../images/film-poster-placeholder.png";
import "./movie.css";

class MovieImage extends Component {
  handleOnClick = () => {
    document.documentElement.scrollTop = 0;
  };

  render() {
    return (
      <ReactImageFallback
        src={this.props.img}
        fallbackImage={placeholder}
        onClick={this.handleOnClick}
        title={this.props.filmTitle}
        className="filcard-image"
      />
    );
  }
}

MovieImage.propTypes = {
  img: PropTypes.string.isRequired,
  film: PropTypes.object.isRequired,
  filmTitle: PropTypes.string.isRequired,
};

export default MovieImage;
