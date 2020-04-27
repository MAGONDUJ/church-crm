import React, { Component } from "react";
class GivingCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <tr>
        <td>{this.props.item.id}</td>
        <td>{this.props.item.memberNumber}</td>
        <td>{this.props.item.paymentMode}</td>
        <td>{this.props.item.txRefNo}</td>
        <td>{this.props.item.txDate}</td>
        <td>{this.props.item.purpose}</td>
        <td>{this.props.item.otherPurpose}</td>
        <td>{this.props.item.nonMemberName}</td>
        <td>{this.props.item.nonMemberPhone}</td>
        <td>{this.props.item.postedBy}</td>
        <td>Edit | Delete</td>
      </tr>
    );
  }
}
export default GivingCard;
