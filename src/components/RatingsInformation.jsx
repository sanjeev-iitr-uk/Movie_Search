import React, { Component, PropTypes} from "react";
import { connect } from "react-redux";

class RatingsInformation extends Component {
  constructor(props) {
    super(props);
    this.renderCols = this.renderCols.bind(this);
  }
  renderCols() {
    const currentSearch = this.props.currentSearch ||{};
    const ratings = currentSearch.Ratings || [];
    const ratingsUI = ratings.map((rating) => {
      return (
        <div className="d-flex flex-column">
          <h4 className="p-2">{rating.Value || ''}</h4>
          <p className="p-2">{rating.Source || ''}</p>
        </div>
      );
    });
    return ratingsUI;
  }
  render() {
    return (
      <div className="d-flex flex-row">
        {this.renderCols()}
      </div>
    )
  }
}

RatingsInformation.propTypes = {
  currentSearch: PropTypes.object.isRequired //eslint-disable-line
}

export default RatingsInformation;
