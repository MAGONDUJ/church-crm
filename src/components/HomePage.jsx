import React, { Component } from "react";
import SideNav from "./SideNav";
const axios = require("axios");

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      firstName: "",
      middleName: "",
      surName: "",
      idNumber: "",
      gender: "",
      dob: "",
      maritalStatus: "",
      maritalStatusDesc: "",
      phoneOne: "",
      phoneTwo: "",
      email: "",
      box: "",
      city: "",
      code: "",
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
      professionalData: "",
      professionalDataOS: "",
      families: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    const syear = new Date("1994-01-01").getFullYear();
    const year = new Date().getFullYear() + 1;
    this.years = Array.from(
      new Array(year - syear),
      (val, index) => index + syear
    );
  }
  componentDidMount() {
    fetch("http://localhost:6800/api/membership/families/")
      .then(response => response.json())
      .then(data => {
        let tmpArray = [];
        tmpArray.push({
          id: 1,
          familyMember: "New",
          familyMemberNo: "",
          familyMemberPhone: ""
        });
        for (var i = 0; i < data.length; i++) {
          tmpArray.push({
            id: i + 2,
            familyMember: data[i].familyMember,
            familyMemberNo: data[i].familyMemberNo,
            familyMemberPhone: data[i].familyMemberPhone
          });
        }
        //console.log(tmpArray);
        this.setState({
          families: tmpArray
        });
      });
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    console.log(event.target.name, event.target.value);
    if (event.target.name == "familyMember") {
      for (var i = 0; i < this.state.families.length; i++) {
        if (this.state.families[i].familyMember === event.target.value) {
          console.log(this.state.families[i]);
          this.setState({
            familyMemberNo: this.state.families[i].familyMemberNo,
            familyMemberPhone: this.state.families[i].familyMemberPhone
          });
        }
      }
    }
  }
  handleSubmit = async event => {
    event.preventDefault();
    await axios
      .post("http://localhost:6800/api/membership/add", this.state)
      .then(response => {
        console.log("Backend Response: ", response);
      });
  };
  render() {
    return (
      <div className="row">
        <div className="col-md-2 bg-light padding-right-0">
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
            <div className="col-md-10 offset-md-1">
              <form>
                <h3>a. Personal Information</h3>
                <hr />
                <div className="form-row">
                  <div className="form-group col-md-1">
                    <label>Title:</label>
                  </div>
                  <div className="form-group col-md-2">
                    <select
                      className="form-control"
                      style={{ marginTop: "-5px" }}
                      name="title"
                      value={this.state.title}
                      onChange={this.handleChange}
                    >
                      <option value="Prof">Prof</option>
                      <option value="Dr">Dr</option>
                      <option value="Mr">Mr</option>
                      <option value="Mrs">Mrs</option>
                      <option value="Ms">Ms</option>
                      <option value="Rev">Rev</option>
                      <option value="Pst">Pst</option>
                      <option value="Gen">Gen</option>
                      <option value="Col">Col</option>
                      <option value="Hon">Hon</option>
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-4">
                    <label>FirstName:</label>
                    <input
                      name="firstName"
                      value={this.state.firstName}
                      onChange={this.handleChange}
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label>MiddleName:</label>
                    <input
                      name="middleName"
                      value={this.state.middleName}
                      onChange={this.handleChange}
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label>SurName:</label>
                    <input
                      name="surName"
                      value={this.state.surName}
                      onChange={this.handleChange}
                      type="text"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-4">
                    <label>Gender:</label>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        onChange={this.handleChange}
                        value="Male"
                        checked={this.state.gender === "Male"}
                      />
                      <label className="form-check-label">Male</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        onChange={this.handleChange}
                        value="Female"
                        checked={this.state.gender === "Female"}
                      />
                      <label className="form-check-label">Female</label>
                    </div>
                  </div>
                  <div className="form-group col-md-4">
                    <label>ID Number:</label>
                    <input
                      name="idNumber"
                      value={this.state.idNumber}
                      onChange={this.handleChange}
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label>Date of Birth (DD/MM/YYYY):</label>
                    <input
                      name="dob"
                      value={
                        this.state.dob == ""
                          ? new Date().toISOString().slice(0, 10)
                          : this.state.dob
                      }
                      onChange={this.handleChange}
                      type="date"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-4">
                    <label>Marital Status:</label>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="maritalStatus"
                        onChange={this.handleChange}
                        value="Not Married"
                        checked={this.state.maritalStatus === "Not Married"}
                      />
                      <label className="form-check-label">Not Married</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="maritalStatus"
                        onChange={this.handleChange}
                        value="Single Parent"
                        checked={this.state.maritalStatus === "Single Parent"}
                      />
                      <label className="form-check-label">Single Parent</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="maritalStatus"
                        onChange={this.handleChange}
                        value="Married"
                        checked={this.state.maritalStatus === "Married"}
                      />
                      <label className="form-check-label">Married</label>
                    </div>
                  </div>
                  <div className="form-group col-md-4">
                    <label className="form-check-label">If Married:</label>
                    <select
                      className="form-control"
                      name="maritalStatusDesc"
                      value={this.state.maritalStatusDesc}
                      onChange={this.handleChange}
                    >
                      <option value=""> </option>
                      <option value="Married in Church">
                        Married in Church
                      </option>
                      <option value="Customary Marriage">
                        Customary Marriage
                      </option>
                      <option value="Married at Registrar Office">
                        Married at Registrar Office
                      </option>
                      <option value="Planning to Solemnize">
                        Planning to Solemnize
                      </option>
                      <option value="Widow">Widow</option>
                      <option value="Widower">Widower</option>
                      <option value="Divorced">Divorced</option>
                    </select>
                  </div>
                </div>
                <br />
                <h3>b. Contact Information</h3>
                <hr />

                <div className="form-row">
                  <div className="form-group col-md-4">
                    <label>Phone Number 1:</label>
                    <input
                      name="phoneOne"
                      value={this.state.phoneOne}
                      onChange={this.handleChange}
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label>Phone Number 2:</label>
                    <input
                      name="phoneTwo"
                      value={this.state.phoneTwo}
                      onChange={this.handleChange}
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label>Email Address:</label>
                    <input
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                      type="text"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-4">
                    <label>P.O. Box:</label>
                    <input
                      name="box"
                      value={this.state.box}
                      onChange={this.handleChange}
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label>City:</label>
                    <input
                      name="city"
                      value={this.state.city}
                      onChange={this.handleChange}
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label>Code:</label>
                    <input
                      name="code"
                      value={this.state.code}
                      onChange={this.handleChange}
                      type="text"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <h5>Residence Address</h5>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-2">
                    <label>City:</label>
                    <input
                      name="residenceCity"
                      value={this.state.residenceCity}
                      onChange={this.handleChange}
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group col-md-3">
                    <label>Geographical Area</label>
                    <input
                      name="geographicalArea"
                      value={this.state.geographicalArea}
                      onChange={this.handleChange}
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group col-md-3">
                    <label>Estate</label>
                    <input
                      name="estate"
                      value={this.state.estate}
                      onChange={this.handleChange}
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group col-md-2">
                    <label>Road</label>
                    <input
                      name="road"
                      value={this.state.road}
                      onChange={this.handleChange}
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group col-md-2">
                    <label>House Number</label>
                    <input
                      name="houseNo"
                      value={this.state.houseNo}
                      onChange={this.handleChange}
                      type="text"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-3">
                    <label>When did you join AIC Milimani</label>
                    <select
                      className="form-control"
                      name="joinYear"
                      value={this.state.joinYear}
                      onChange={this.handleChange}
                    >
                      {this.years.map((year, index) => {
                        return (
                          <option key={`year${index}`} value={year}>
                            {year}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>

                <br />
                <h3>c. Family Members in AIC Milimani</h3>
                <hr />

                <div className="form-row">
                  <div className="form-group col-md-3">
                    <label>Name</label>
                    <select
                      className="form-control"
                      name="familyMember"
                      value={this.state.familyMember}
                      onChange={this.handleChange}
                    >
                      {this.state.families.map(item => {
                        return (
                          <option key={item.id} value={item.familyMember}>
                            {item.familyMember}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="form-group col-md-3">
                    <label>Member number</label>
                    <input
                      name="familyMemberNo"
                      value={this.state.familyMemberNo}
                      onChange={this.handleChange}
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group col-md-3">
                    <label>Relationship</label>
                    <input
                      name="familyMemberRelationship"
                      value={this.state.familyMemberRelationship}
                      onChange={this.handleChange}
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group col-md-3">
                    <label>Mobile Number</label>
                    <input
                      name="familyMemberPhone"
                      value={this.state.familyMemberPhone}
                      onChange={this.handleChange}
                      type="text"
                      className="form-control"
                    />
                  </div>
                </div>
                <br />
                <h3>d. Spiritual Data</h3>
                <hr />
                <div className="form-row">
                  <div className="form-group col-md-3">
                    <label>Are you baptized:</label>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="baptized"
                        onChange={this.handleChange}
                        value="Yes"
                        checked={this.state.baptized === "Yes"}
                      />
                      <label className="form-check-label">Yes</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="baptized"
                        onChange={this.handleChange}
                        value="No"
                        checked={this.state.baptized === "No"}
                      />
                      <label className="form-check-label">No</label>
                    </div>
                  </div>
                  <div className="form-group col-md-3">
                    <label>Baptism Date:</label>
                    <input
                      name="baptizeDate"
                      value={
                        this.state.baptizeDate == ""
                          ? ""
                          : this.state.baptizeDate
                      }
                      onChange={this.handleChange}
                      type="date"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group col-md-3">
                    <label>Place of Baptism</label>
                    <input
                      name="baptizePlace"
                      value={this.state.baptizePlace}
                      onChange={this.handleChange}
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group col-md-3">
                    <label>Nature of baptism:</label>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="baptizeNature"
                        onChange={this.handleChange}
                        value="Immersion"
                        checked={this.state.baptizeNature === "Immersion"}
                      />
                      <label className="form-check-label">Immersion</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="baptizeNature"
                        onChange={this.handleChange}
                        value="Other"
                        checked={this.state.baptizeNature === "Other"}
                      />
                      <label className="form-check-label">Other</label>
                    </div>
                  </div>
                </div>
                <br />
                <h3>e. Home Church</h3>
                <hr />
                <div className="form-row">
                  <div className="form-group col-md-3">
                    <label>Church</label>
                    <input
                      name="homeChurch"
                      value={this.state.homeChurch}
                      onChange={this.handleChange}
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group col-md-3">
                    <label>County</label>
                    <input
                      name="churchCounty"
                      value={this.state.churchCounty}
                      onChange={this.handleChange}
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group col-md-3">
                    <label>Location</label>
                    <input
                      name="churchLocation"
                      value={this.state.churchLocation}
                      onChange={this.handleChange}
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group col-md-3">
                    <label>Land Mark</label>
                    <input
                      name="churchLandMark"
                      value={this.state.churchLandMark}
                      onChange={this.handleChange}
                      type="text"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-4">
                    <label>Local Pastor</label>
                    <input
                      name="churchPastor"
                      value={this.state.churchPastor}
                      onChange={this.handleChange}
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label>Contact details</label>
                    <input
                      name="churchPastorContact"
                      value={this.state.churchPastorContact}
                      onChange={this.handleChange}
                      type="text"
                      className="form-control"
                    />
                  </div>
                </div>
                <br />
                <h3>f. Professional Data</h3>
                <hr />

                <div className="form-row">
                  <div className="form-group col-md-5">
                    <label>What is your area of specialization/training</label>
                    <select
                      className="form-control"
                      name="professionalData"
                      value={this.state.professionalData}
                      onChange={this.handleChange}
                    >
                      <option value="Education">Education</option>
                      <option value="Medical">Medical</option>
                      <option value="Clergy">Clergy</option>
                      <option value="Political">Political</option>
                      <option value="Media">Media</option>
                      <option value="Hospitality">Hospitality</option>
                      <option value="Security">Security</option>
                      <option value="Administrative">Administrative</option>
                      <option value="Business">Business</option>
                      <option value="Social">Social</option>
                      <option value="Security">Engineering</option>
                      <option value="Administrative">Finance</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="form-group col-md-5">
                    <label>Other(Specify)</label>
                    <input
                      name="professionalDataOS"
                      value={this.state.professionalDataOS}
                      onChange={this.handleChange}
                      type="text"
                      className="form-control"
                    />
                  </div>
                </div>

                <button onClick={this.handleSubmit} className="btn btn-info">
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
