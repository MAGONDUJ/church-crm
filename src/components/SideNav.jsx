import React, { Component } from "react";
// @flow

class SideNav extends Component {
  render() {
    return (
      <div className="list-group  list-group-flush">
        <a href="#" className="list-group-item list-group-item-secondary">
          Membership
        </a>
        <a href="#" className="list-group-item list-group-item-secondary">
          Tithe
        </a>
        <a href="#" className="list-group-item list-group-item-secondary">
          Sunday School
        </a>
        <a href="#" className="list-group-item list-group-item-secondary">
          Events
        </a>
        <a href="#" className="list-group-item list-group-item-secondary">
          Reports
        </a>
      </div>
    );
  }
}

export default SideNav;
