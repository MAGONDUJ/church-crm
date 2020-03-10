import React, { Component } from "react";

import SideNav from "./SideNav";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Prof.",
      firstName: "",
      middleName: "",
      surName: "",
      gender: "",
      dob: "",
      maritalStatus: "",
      maritalStatusDesc: "",
      phoneOne: "",
      phoneTwo: "",
      email: "",
      box: "",
      city: "",
      residenceCity: "",
      geographicalArea: "",
      estate: "",
      road: "",
      houseNo: "",
      joinYear: "",
      familyMember: "",
      familyMemberNo: "",
      familyMemberRelationship: "",
      familyMemberPhone: "",
      baptized: "",
      baptizeDate: "",
      baptizePlace: "",
      baptizeNature: "",
      homeChurch: "",
      churchCounty: "",
      churchLocation: "",
      churchLandMark: "",
      churchPastor: "",
      churchPastorContact: "",
      professionalData: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit = async event => {
    event.preventDefault();

    const { token } = await stripe.createToken();

    const order = await axios.post("http://localhost:6800/api/membership/add", {
      ticket_type: "GOLD",
      name: "TEST",
      quantity: 1,
      amount: "200",
      email: "magondu@kesholabs.com",
      phone: "254728064120",
      name: "jUlius Kar",
      token
    });
    console.log("order_data: ", order.data);
    setReceiptUrl(order.data.charge.receipt_url);
  };
  render() {
    return (
      <div className="row">
        <div className="col-md-2 padding-0">
          <SideNav />
        </div>
        <div className="col-md-10 padding-0">
          <div className="row">
            <div className="col-md-12 col">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Membership</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    New
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          <div className="row">
            <div className="col-md-8 offset-md-1">
              <form>
                <div className="form-row">
                  <div className="form-group col-md-1">
                    <label>Title:</label>
                  </div>
                  <div className="form-group col-md-2">
                    <select
                      value={this.state.title}
                      onChange={this.handleChange}
                    >
                      <option value="Prof">Prof.</option>
                      <option value="Dr">Dr.</option>
                      <option value="Dr">Mr.</option>
                      <option value="Dr">Mrs.</option>
                      <option value="Dr">Ms.</option>
                      <option value="Dr">Rev.</option>
                      <option value="Dr">Pst.</option>
                      <option value="Dr">Gen.</option>
                      <option value="Dr">Col.</option>
                      <option value="Dr">Hon.</option>
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-4">
                    <label>FirstName:</label>
                    <input
                      value={this.state.firstName}
                      onChange={this.handleChange}
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label>MiddleName:</label>
                    <input
                      value={this.state.middleName}
                      onChange={this.handleChange}
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label>SurName:</label>
                    <input
                      value={this.state.surName}
                      onChange={this.handleChange}
                      type="text"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="1234 Main St"
                  />
                </div>
                <div className="form-group">
                  <label>Address 2</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress2"
                    placeholder="Apartment, studio, or floor"
                  />
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label>City</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputCity"
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label>State</label>
                    <select value={this.state.mycar} className="form-control">
                      <option value="Ford">Choose...</option>
                      <option value="Volvo">...</option>
                    </select>
                  </div>
                  <div className="form-group col-md-2">
                    <label>Zip</label>
                    <input type="text" className="form-control" id="inputZip" />
                  </div>
                </div>
                <div className="form-group">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <label className="form-check-label">Check me out</label>
                  </div>
                </div>
                <button type="submit" className="btn btn-warning">
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
