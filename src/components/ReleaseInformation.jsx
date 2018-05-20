import React, { Component, PropTypes} from "react";
import { connect } from "react-redux";
import RatingsInformation from './RatingsInformation';

class ReleaseInformation extends Component {
  constructor(props) {
    super(props);
    this.checkIfWatched = this.checkIfWatched.bind(this);
  }
  checkIfWatched() {
    let watched = this.props.isItNew;
    if (watched) {
      return (
        <button
          className="btn btn-success btn-xs"
          type="button">
          Watched
        </button>
      );
    }
    return '';
  }
  render() {
  	const currentSearch = this.props.currentSearch ||{};
    return (
    	<div className="d-flex flex-column">
        <div className="d-flex flex-column">
          <h4 className="p-2">{currentSearch.Title || ''}</h4>
          <h4 className="p-2">{currentSearch.Released || ''}</h4>
        </div>
        <div className="d-flex flex-row">
          <RatingsInformation
            currentSearch={currentSearch} />
        <div className="d-flex flex-column">
          <div className="p-2" />
          <div>{this.checkIfWatched()}</div>
        </div>
        </div>
      </div>
    );
  }
}

ReleaseInformation.propTypes = {
  currentSearch: PropTypes.object.isRequired, // eslint-disable-line
  watchedList: PropTypes.array.isRequired, // eslint-disable-line
  isItNew: PropTypes.bool.isRequired //eslint-disable-line
}

export default ReleaseInformation;
