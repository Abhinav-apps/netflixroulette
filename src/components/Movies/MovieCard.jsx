import React, { Component } from "react";
import PropTypes from "prop-types";
import MovieImage from "./MovieImage";
import MovieInfo from "./MovieInfo";
import "./movie.css";
import Dialog from "../Dialog"; // Import the Dialog component
import MovieForm from "../MovieForm"; // Import the MovieForm component

class MovieCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEditMenu: false,
      isEditDialogOpen: false,
      movieData: null,
    };
  }

  toggleEditMenu = () => {
    this.setState((prevState) => ({
      showEditMenu: !prevState.showEditMenu,
    }));
  };

  openEditDialog = (movieData) => {
    this.setState({
      isEditDialogOpen: true,
      showEditMenu: false,
      movieData: movieData,
    });
  };

  closeEditDialog = () => {
    this.setState({
      isEditDialogOpen: false,
    });
  };

  render() {
    return (
      <div className="movie-card" onMouseLeave={this.closeEditMenu}>
        <div className="dots-overlay" onClick={this.toggleEditMenu}>
          <i className="fa fa-ellipsis-v"></i>
        </div>
        {this.state.showEditMenu && (
          <div className="edit-menu">
            <div
              className="edit-option"
              onClick={() => this.openEditDialog(this.props.film)}
            >
              Edit Movie
            </div>
            <div className="edit-option">Delete Movie</div>
          </div>
        )}
        <MovieImage
          toggleShowFilmBody={this.props.toggleShowFilmBody}
          img={this.props.pictureURL}
          filmTitle={this.props.name}
          film={this.props.film}
        />
        <MovieInfo
          description={this.props.tagline}
          name={this.props.name}
          year={this.props.year}
        />
        {this.state.isEditDialogOpen && (
          <Dialog title="Edit Movie" onClose={this.closeEditDialog}>
            <MovieForm
              initialMovie={this.state.movieData}
              onSubmit={(data) => {
                // Handle editing movie data here
                console.log("Editing movie data:", data);
                this.closeEditDialog();
              }}
            />
          </Dialog>
        )}
      </div>
    );
  }
}

MovieCard.propTypes = {
  genres: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  year: PropTypes.string.isRequired,
  pictureURL: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  film: PropTypes.object.isRequired,
};

export default MovieCard;
