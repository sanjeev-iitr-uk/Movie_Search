import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setNewWatchedList } from "../actions/index";

class WatchedList extends Component {
  constructor(props) {
    super(props);
    this.renderImages = this.renderImages.bind(this);
    this.deleteFromWatchedList = this.deleteFromWatchedList.bind(this);
  }
  deleteFromWatchedList(index) {
    const watchedList = this.props.watchedList || [];
    const newWatchedList = watchedList.filter((item, i) => {
      return i !== index;
    });
    this.props.setNewWatchedList(newWatchedList);
  }
  renderImages() {
    const watchedList = this.props.watchedList || [];
    const UI = watchedList.map((movie, index) => {
      return (
        <img
          onClick={(e) => {
            e.preventDefault();
            this.deleteFromWatchedList(index);
          }}
          src={movie.Poster || ''}
          class="p-2 img-rounded"
          alt={movie.Title || ''}
          width="200"
          height="100" />
      );
    });
    return UI;
  }
  render() {
    const watchedList = this.props.watchedList;
    return (
      <div>
        {watchedList.length ? 'Watched' : ''}
        <div className="d-flex flex-row">
          {this.renderImages(watchedList)}
        </div>
      </div>
    );
  }
}
WatchedList.propTypes = {
  watchedList: PropTypes.array.isRequired //eslint-disable-line
};
function mapStateToProps(state) {
  const { watchedList } = state.moviesData;
  return {
    watchedList
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setNewWatchedList }, dispatch);
  debugger;
}
export default connect(mapStateToProps, mapDispatchToProps)(WatchedList);
