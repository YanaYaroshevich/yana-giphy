import React, { Component } from "react";
import { connect } from "react-redux";
import GifItem from "../../components/GifItem/GifItem";

import * as actions from "./services/actions";

export class Random extends Component {
  componentDidMount() {
    this.props.randomLoadItems();
  }

  render() {
    return (
      <div className={"random"}>
        {this.props.loading ? <div className={"loading"}>Loading!</div> : null}
        {this.props.error ? (
          <div className={"error"}>{this.props.error}</div>
        ) : null}
        {this.props.item ? <GifItem url={this.props.item.embed_url} /> : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { loading, error, item } = state.random;

  return {
    loading,
    error,
    item
  };
};

const mapDispatchToProps = dispatch => {
  return {
    randomLoadItems: () => dispatch(actions.randomLoadItemsRequest())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Random);
