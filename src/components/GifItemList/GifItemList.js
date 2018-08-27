import React, { Component } from "react";
import axios from "axios";
import constants from "../../constants";
import GifItem from "../GifItem/GifItem";
import "./GifItemList.css";

class GifItemList extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  componentDidMount() {
    const self = this;
    axios
      .get(`${constants.baseUrl}/v1/gifs/trending`, {
        params: {
          api_key: `${constants.apiKey}`,
          limit: 20
        }
      })
      .then(res => {
        self.setState({ data: res.data.data });
      });
  }

  render() {
    return (
      <div className="gif-container">
        {this.state.data.map(item => (
          <GifItem key={item.id} url={item.embed_url} />
        ))}
      </div>
    );
  }
}

export default GifItemList;
