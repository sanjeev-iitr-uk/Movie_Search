import React from "react";
import { Component } from "react";
import SearchBar from "../containers/search_bar";
import Poster from "../containers/Poster";
import MovieInformation from "../containers/MovieInformation";
import WatchedList from '../containers/WatchedList';

// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  render() {
    return (
    	<div
    	  className="d-flex flex-column">
	      <div
	        style={{borderBottom: '2px solid green', width: '100%'}}
	        className="d-flex flex-row align-items-center justify-content-between">
	        <div className="p-2">
	          <h4>Movieflix</h4>
	        </div>
	        <div className="p-2">
	        	<SearchBar />
	        </div>
	      </div>
	      <div
	        style={{width: '100%'}}
	        className="d-flex flex-row">
	        <div className="p-2">
	          <Poster />
	        </div>
	        <div
	          style={{width: '100%'}}
	          className="d-flex flex-column">
	        	<MovieInformation />
	        </div>
	      </div>
	      <div
	        style={{width: '100%'}}
	        className="d-flex flex-row">
	        <WatchedList />
	      </div>
      </div>
    );
  }
}
