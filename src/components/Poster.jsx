import React, { Component } from "react";
import { connect } from "react-redux";

class MoviesList extends Component {
  render() {
  	const currentSearch = this.props.currentSearch;
    return (
    	<img
    	  src={currentSearch.Poster || ''}
    	  class="img-rounded"
    	  alt={currentSearch.Title || ''}
    	  width="200"
    	  height="100" />
    );
  }
}

function mapStateToProps({ currentSearch }) {
  return { currentSearch };
}

export default connect(mapStateToProps)(MoviesList);
