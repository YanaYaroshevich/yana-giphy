import React, { Component } from "react";
import PropTypes from "prop-types";
import "./GifItem.css";

const propTypes = {
  url: PropTypes.string.isRequired
};

class GifItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <iframe
        src={this.props.url}
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen
      />
    );
  }
}

GifItem.propTypes = propTypes;

export default GifItem;
