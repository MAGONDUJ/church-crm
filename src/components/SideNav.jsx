import React, { Component } from "react";
// @flow

class SideNav extends Component {
  render() {
    return (
      <div className="list-group">
        <a href="#" className="list-group-item list-group-item-primary">
          Membership
        </a>
        <a href="#" className="list-group-item list-group-item-secondary">
          Tithe
        </a>
        <a href="#" className="list-group-item list-group-item-success">
          Sunday School
        </a>
        <a href="#" className="list-group-item list-group-item-danger">
          Events
        </a>
        <a href="#" className="list-group-item list-group-item-warning">
          Reports
        </a>
      </div>
    );
  }
}

export default SideNav;
