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
import FamilyCard from "./cards/FamilyCard";
class Families extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      families: [],
    };
  }
  componentDidMount() {
    this.setState({ loading: true });
    fetch(
      "http://" + window.location.hostname + ":6800/api/membership/families/"
    )
      .then((response) => response.json())
      .then((data) => {
        let tmpArray = [];
        for (var i = 0; i < data.length; i++) {
          tmpArray.push({
            id: i + 1,
            familyMember: data[i].familyMember,
            familyMemberNo: data[i].familyMemberNo,
            familyMemberPhone: data[i].familyMemberPhone,
          });
        }
        //console.log(tmpArray);
        this.setState({
          loading: false,
          families: tmpArray,
        });
      });
  }
  render() {
    const familiesItems = this.state.loading ? (
      <div className="text-center">
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </div>
    ) : (
      this.state.families.map((item) => (
        <FamilyCard key={item.id} item={item} />
      ))
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
                        <MDBIcon icon="users" />
                        &nbsp; Families
                      </p>
                    </MDBCardImage>
                    <MDBCardBody cascade>
                      <MDBTable>
                        <MDBTableHead>
                          <tr>
                            <th>#</th>
                            <th>Family Name</th>
                            <th>Family Number</th>
                            <th>Family Phone</th>
                            <th>Action</th>
                          </tr>
                        </MDBTableHead>
                        <MDBTableBody>{familiesItems}</MDBTableBody>
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
export default Families;
