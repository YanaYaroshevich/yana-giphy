import React, { Component } from "react";
import PropTypes from "prop-types";

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
        width="480"
        height="480"
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen
      />
    );
  }
}

GifItem.PropTypes = propTypes;

export default GifItem;
