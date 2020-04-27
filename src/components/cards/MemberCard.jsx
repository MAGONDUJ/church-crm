import React, { Component } from "react";
class MemberCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <tr>
        <td>{this.props.item.id}</td>
        <td>{this.props.item.memberNo}</td>
        <td>{this.props.item.firstName}</td>
        <td>{this.props.item.middleName}</td>
        <td>{this.props.item.surName}</td>
        <td>{this.props.item.gender}</td>
        <td>{this.props.item.maritalStatus}</td>
        <td>{this.props.item.phoneOne}</td>
        <td>{this.props.item.familyMemberNo}</td>
        <td>{this.props.item.familyMember}</td>
        <td>Edit | Delete</td>
      </tr>
    );
  }
}
export default MemberCard;
