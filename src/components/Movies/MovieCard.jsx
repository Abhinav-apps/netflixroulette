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
      isDeleteDialogOpen: false, // Add a state variable for the delete confirmation dialog
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

  closeEditMenu = () => {
    this.setState({
      showEditMenu: false,
    });
  };

  // Function to open the delete confirmation dialog
  openDeleteDialog = () => {
    this.setState({
      isDeleteDialogOpen: true,
      showEditMenu: false,
    });
  };

  // Function to close the delete confirmation dialog
  closeDeleteDialog = () => {
    this.setState({
      isDeleteDialogOpen: false,
    });
  };

  handleDelete = () => {
    // Handle the deletion of the movie here
    // You can call an API or perform other necessary actions
    // After the deletion is successful, you can close the dialog
    this.closeDeleteDialog();
  };

  render() {
    return (
      <div className="movie-card" onMouseLeave={this.closeEditMenu}>
        <div className="dots-overlay" onClick={this.toggleEditMenu}>
          <i className="fa fa-ellipsis-v"></i>
        </div>
        {this.state.showEditMenu && (
          <div className="edit-menu">
            <div className="edit-option" onClick={() => this.openEditDialog(this.props.film)}>
              Edit Movie
            </div>
            <div className="edit-option" onClick={this.openDeleteDialog}>Delete Movie</div> {/* Open delete confirmation dialog */}
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
        {this.state.isDeleteDialogOpen && (
          <Dialog title="DELETE MOVIE" onClose={this.closeDeleteDialog}>
            <div>
            Are you sure you want to delete this movie?
            </div>
            <div className="delete-dialog-buttons">
              <button onClick={this.handleDelete}>Confirm</button> &nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;
              <button onClick={this.closeDeleteDialog}>Cancel</button>
            </div>
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
