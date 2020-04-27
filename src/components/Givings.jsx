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
import GivingCard from "./cards/GivingCard";
class Givings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      givings: [],
    };
  }
  componentDidMount() {
    this.setState({ loading: true });
    fetch("http://localhost:6800/api/giving/givings/")
      .then((response) => response.json())
      .then((data) => {
        let tmpArray = [];
        for (var i = 0; i < data.length; i++) {
          tmpArray.push({
            id: i + 1,
            memberNumber: data[i].memberNumber,
            paymentMode: data[i].paymentMode,
            txRefNo: data[i].txRefNo,
            txDate: data[i].txDate,
            purpose: data[i].purpose,
            otherPurpose: !!data[i].otherPurpose ? data[i].nonMemberPhone : " ",
            nonMemberName: !!data[i].nonMemberName
              ? data[i].nonMemberPhone
              : " ",
            nonMemberPhone: !!data[i].nonMemberPhone
              ? data[i].nonMemberPhone
              : " ",
            postedBy: data[i].postedBy,
          });
        }
        //console.log(tmpArray);
        this.setState({
          loading: false,
          givings: tmpArray,
        });
      });
  }
  render() {
    const givingsItems = this.state.loading ? (
      <div className="text-center">
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </div>
    ) : (
      this.state.givings.map((item) => <GivingCard key={item.id} item={item} />)
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
                        <MDBIcon icon="donate" />
                        &nbsp; Givings
                      </p>
                    </MDBCardImage>
                    <MDBCardBody cascade>
                      <MDBTable>
                        <MDBTableHead>
                          <tr>
                            <th>#</th>
                            <th>Member Number</th>
                            <th>Payment Mode</th>
                            <th>Reference</th>
                            <th>Date</th>
                            <th>Purpose</th>
                            <th>Other Purpose</th>
                            <th>Non Member Name</th>
                            <th>Non Member Phone</th>
                            <th>Posted By</th>
                            <th>Action</th>
                          </tr>
                        </MDBTableHead>
                        <MDBTableBody>{givingsItems}</MDBTableBody>
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
export default Givings;
