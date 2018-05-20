import React, { Component } from "react";
import { connect } from "react-redux";

class Poster extends Component {
  render() {
  	const currentSearch = this.props.currentSearch ||{};
    return (
    	<img
    	  src={currentSearch.Poster || ''}
    	  class="img-rounded"
    	  alt={currentSearch.Title || ''}
    	  width="200"
    	  height="236" />
    );
  }
}

function mapStateToProps(state) {
  debugger;
  const { currentSearch } = state.moviesData;
  return {
    currentSearch
  };
}

export default connect(mapStateToProps)(Poster);
