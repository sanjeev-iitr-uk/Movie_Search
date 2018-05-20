import React, { Component } from "react";
import { connect } from "react-redux";
import ReleaseInformation from "../components/ReleaseInformation";

class MovieInformation extends Component {
  render() {
  	const currentSearch = this.props.currentSearch ||{};
    const watchedList = this.props.watchedList || [];
    const isItNew = this.props.isItNew;
    debugger;
    return (
    	<div className="d-flex flex-column">
        <ReleaseInformation
          currentSearch={currentSearch}
          watchedList={watchedList}
          isItNew={isItNew} />
        <p className="p-2">
          {currentSearch.Plot || ''}
        </p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  debugger;
  const { currentSearch, watchedList,isItNew } = state.moviesData;
  return {
    currentSearch,
    watchedList,
    isItNew
  };
}

export default connect(mapStateToProps)(MovieInformation);
