import React, { Component } from "react";
import { Navbar, NavItem } from "react-materialize";
import { withRouter } from "react-router-dom";

const NavItemRouter = withRouter(
  ({ match, location, history, to, children }) => {
    const onClick = event => {
      history.push(to);
    };
    const isActive = location.pathname === to;
    return (
      <NavItem className={isActive ? "active" : null} onClick={onClick}>
        {children}
      </NavItem>
    );
  }
);

class Header extends Component {
  render() {
    return (
      <Navbar brand="Yana Giphy" right>
        <NavItemRouter to={"/"}>Trending</NavItemRouter>
        <NavItemRouter to={"/random"}>Random</NavItemRouter>
      </Navbar>
    );
  }
}

export default Header;
