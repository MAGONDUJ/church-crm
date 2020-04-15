import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class SideNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navState: 0
    };
    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }

  openNav = async event => {
    event.preventDefault();
    this.setState({ navState: 0 });
  };

  closeNav = async event => {
    event.preventDefault();
    this.setState({ navState: 1 });
  };
  render() {
    if (this.state.navState == 0) {
      return (
        <div>
          <div className="sidenav" style={{ width: "200px" }}>
            <NavLink to="#" className="closebtn" onClick={this.closeNav}>
              {" "}
              &times;
            </NavLink>
            <a href="/">Membership</a>
            <a href="/giving">Giving</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="sidenav" style={{ width: "0" }}>
            <a href="/">Membership</a>
            <a href="/giving">Giving</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
          </div>
          <NavLink to="#" className="menubtn" onClick={this.openNav}>
            &#9776; Menu
          </NavLink>
        </div>
      );
    }
  }
}

export default SideNav;
