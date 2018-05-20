import React, { Component } from "react";
import { connect } from "react-redux";

class MoviesList extends Component {
  renderMovies(moviesData) {
    const moviesList = this.props.movies || [];
    const movies = moviesList.map((movie) => {
      return (
        <tr key={movie.Title}>
          <td>{movie.Title}</td>
          <td>{movie.Year}</td>
          <td>{movie.Genre}</td>
          <td>{movie.Director}</td>
        </tr>
      );
    });
    return movies;
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Genre</th>
            <th>Director</th>
          </tr>
        </thead>
        <tbody>
          {this.renderMovies()}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ movies }) {
  return { movies };
}

export default connect(mapStateToProps)(MoviesList);
