import React, { Component } from "react";
import GifItem from "../GifItem/GifItem";
import "./GifItemList.css";
import PropTypes from "prop-types";

const propTypes = {
  items: PropTypes.array.isRequired
};

class GifItemList extends Component {
  render() {
    return (
      <div className="gif-container">
        {this.props.items.map(item => (
          <GifItem key={item.id} url={item.embed_url} />
        ))}
      </div>
    );
  }
}

GifItemList.propTypes = propTypes;

export default GifItemList;
