import React, { Component } from "react";
import { connect } from "react-redux";
import GifItemList from "../../components/GifItemList/GifItemList";

import * as actions from "./services/actions";

export class Home extends Component {
  componentDidMount() {
    this.props.homeLoadItems();
  }

  render() {
    return (
      <div className={"home"}>
        {this.props.loading ? <div className={"loading"}>Loading!</div> : null}
        {this.props.error ? (
          <div className={"error"}>{this.props.error}</div>
        ) : null}
        {this.props.items ? <GifItemList items={this.props.items} /> : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { loading, error, items } = state.home;

  return {
    loading,
    error,
    items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    homeLoadItems: () => dispatch(actions.homeLoadItemsRequest())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
