import React, { Component } from "react";
import {
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
} from "mdbreact";
import Navigation from "./Navigation";
import SideNav from "./SideNav";
import MemberCard from "./cards/MemberCard";
class Members extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      members: [],
    };
  }
  componentDidMount() {
    this.setState({ loading: true });
    fetch("http://localhost:6800/api/membership/members/")
      .then((response) => response.json())
      .then((data) => {
        let tmpArray = [];
        for (var i = 0; i < data.length; i++) {
          tmpArray.push({
            id: i + 1,
            memberNo: data[i].memberNo,
            firstName: data[i].firstName,
            middleName: data[i].middleName,
            surName: data[i].surName,
            gender: data[i].gender,
            maritalStatus: data[i].maritalStatus,
            phoneOne: data[i].phoneOne,
            familyMemberNo: data[i].familyMemberNo,
            familyMember: data[i].familyMember,
          });
        }
        //console.log(tmpArray);
        this.setState({
          loading: false,
          members: tmpArray,
        });
      });
  }
  render() {
    const memberItems = this.state.loading ? (
      <div className="text-center">
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </div>
    ) : (
      this.state.members.map((item) => <MemberCard key={item.id} item={item} />)
    );
    return (
      <div>
        <Navigation />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
              <SideNav />
            </div>
            <div className="col-md-10">
              <br />
              <div className="row">
                <div className="col-md-12">
                  <MDBCard wide>
                    <MDBCardImage
                      className="view view-cascade gradient-card-header peach-gradient text-center text-white"
                      cascade
                      tag="div"
                    >
                      <br />
                      <h2 className="h2-responsive mb-2">Reports</h2>
                      <p>
                        <MDBIcon icon="address-book" />
                        &nbsp; Members
                      </p>
                    </MDBCardImage>
                    <MDBCardBody cascade>
                      <MDBTable>
                        <MDBTableHead>
                          <tr>
                            <th>#</th>
                            <th>Member No</th>
                            <th>First Name</th>
                            <th>Middle Name</th>
                            <th>Sur Name</th>
                            <th>Gender</th>
                            <th>Marital Status</th>
                            <th>Phone</th>
                            <th>Family Number</th>
                            <th>Family Name</th>
                            <th>Action</th>
                          </tr>
                        </MDBTableHead>
                        <MDBTableBody>{memberItems}</MDBTableBody>
                      </MDBTable>
                    </MDBCardBody>
                  </MDBCard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Members;
