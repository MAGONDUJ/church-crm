import React, { Component } from "react";
class FamilyCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <tr>
        <td>{this.props.item.id}</td>
        <td>{this.props.item.familyMember}(s)</td>
        <td>{this.props.item.familyMemberNo}</td>
        <td>{this.props.item.familyMemberPhone}</td>
        <td>Edit | Delete</td>
      </tr>
    );
  }
}
export default FamilyCard;
