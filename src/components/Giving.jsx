import React, { Component } from "react";
import SideNav from "./SideNav";
const axios = require("axios");

class Giving extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      memberNumber: "",
      fullName: "",
      paymentMode: "Cash",
      amount: "",
      txRefNo: "",
      txDate: "",
      purpose: "Offering",
      otherPurpose: "",
      nonMemberName: "",
      nonMemberPhone: "",
      nonMemberEmail: "",
      postedBy: "Admin",
      members: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  componentDidMount() {
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
            phoneOne: data[i].phoneOne,
          });
        }
        //console.log(tmpArray);
        this.setState({
          members: tmpArray,
        });
      });
  }
  handleChange(event) {
    //console.log(event.target.name, event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSearch = async (event) => {
    event.preventDefault();
    let result = this.state.members.filter((member) => {
      return member.memberNo.search(this.state.search) != -1;
    });
    if (result[0] != null) {
      this.setState({
        fullName:
          "Found Member: " +
          result[0].firstName +
          " " +
          result[0].middleName +
          " " +
          result[0].surName,
      });
      this.setState({ memberNumber: result[0].memberNo });
    } else {
      result = this.state.members.filter((member) => {
        return member.firstName.search(this.state.search) != -1;
      });
      if (result[0] != null) {
        this.setState({
          fullName:
            "Found Member: " +
            result[0].firstName +
            " " +
            result[0].middleName +
            " " +
            result[0].surName,
        });
        this.setState({ memberNumber: result[0].memberNo });
      } else {
        result = this.state.members.filter((member) => {
          return member.middleName.search(this.state.search) != -1;
        });
        if (result[0] != null) {
          this.setState({
            fullName:
              "Found Member: " +
              result[0].firstName +
              " " +
              result[0].middleName +
              " " +
              result[0].surName,
          });
          this.setState({ memberNumber: result[0].memberNo });
        } else {
          result = this.state.members.filter((member) => {
            return member.surName.search(this.state.search) != -1;
          });
          if (result[0] != null) {
            this.setState({
              fullName:
                "Found Member: " +
                result[0].firstName +
                " " +
                result[0].middleName +
                " " +
                result[0].surName,
            });
            this.setState({ memberNumber: result[0].memberNo });
          } else {
            result = this.state.members.filter((member) => {
              return member.phoneOne.search(this.state.search) != -1;
            });
            if (result[0] != null) {
              this.setState({
                fullName:
                  "Found Member: " +
                  result[0].firstName +
                  " " +
                  result[0].middleName +
                  " " +
                  result[0].surName,
              });
              this.setState({ memberNumber: result[0].memberNo });
            } else {
              this.setState({ fullName: "Found Member: None" });
            }
          }
        }
      }
    }
    console.log("Search Result:", result[0]);
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    await axios
      .post("http://localhost:6800/api/giving/add", this.state)
      .then((response) => {
        console.log("Backend Response: ", response.data);
        window.alert(response.data.details);
      });
    window.location.reload(false);
  };
  render() {
    return (
      <div className="row">
        <div className="col-md-2 bg-secondary padding-right-0">
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
                    <a href="#">Giving</a>
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
                <div className="card">
                  <div className="card-body">
                    <div className="form-row">
                      <div className="form-group col-md-5">
                        <label>Search by:</label>
                        <div className="input-group mb-3">
                          <input
                            name="search"
                            value={this.state.search}
                            onChange={this.handleChange}
                            onKeyPress={(e) => {
                              e.key === "Enter" ? this.handleSearch(e) : null;
                            }}
                            type="text"
                            className="form-control"
                            placeholder="Member Number/Name/Mobile"
                            autoComplete="search"
                          />
                          <div className="input-group-append">
                            <span className="input-group-text">&crarr;</span>
                          </div>
                        </div>
                        <small className="form-text text-warning">
                          {this.state.fullName}
                        </small>
                      </div>
                      <div className="form-group col-md-4">
                        <label>Payment Mode:</label>
                        <select
                          className="form-control"
                          name="paymentMode"
                          value={this.state.paymentMode}
                          onChange={this.handleChange}
                        >
                          <option value="Cash">Cash</option>
                          <option value="Mpesa">Mpesa</option>
                          <option value="Cheque">Cheque</option>
                          <option value="Bank Transfer/Deposit">
                            Bank Transfer/Deposit
                          </option>
                          <option value="Cheque">Other</option>
                        </select>
                      </div>
                      <div className="form-group col-md-3">
                        <label>Amount:</label>
                        <input
                          name="amount"
                          value={this.state.amount}
                          onChange={this.handleChange}
                          type="text"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-4">
                        <label>Transaction RefNo:</label>
                        <input
                          name="txRefNo"
                          value={this.state.txRefNo}
                          onChange={this.handleChange}
                          type="text"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group col-md-3">
                        <label>Transaction Date:</label>
                        <input
                          name="txDate"
                          value={
                            this.state.txDate == "" ? "" : this.state.txDate
                          }
                          onChange={this.handleChange}
                          type="date"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-4">
                        <label>Purpose:</label>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="purpose"
                            onChange={this.handleChange}
                            value="Offering"
                            checked={this.state.purpose === "Offering"}
                          />
                          <label className="form-check-label">Offering</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="purpose"
                            onChange={this.handleChange}
                            value="Tithe"
                            checked={this.state.purpose === "Tithe"}
                          />
                          <label className="form-check-label">Tithe</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="purpose"
                            onChange={this.handleChange}
                            value="Ministry Event"
                            checked={this.state.purpose === "Ministry Event"}
                          />
                          <label className="form-check-label">
                            Ministry Event
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="purpose"
                            onChange={this.handleChange}
                            value="Other"
                            checked={this.state.purpose === "Other"}
                          />
                          <label className="form-check-label">Other</label>
                        </div>
                      </div>
                      <div
                        className="form-group col-md-4"
                        style={
                          this.state.purpose === "Other"
                            ? {}
                            : { display: "none" }
                        }
                      >
                        <label>Other Details/Description:</label>
                        <textarea
                          className="form-control"
                          name="otherPurpose"
                          rows="3"
                          value={this.state.otherPurpose}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <div className="card">
                  <div className="card-body">
                    <h6>Non Member</h6>
                    <hr />
                    <div className="form-row">
                      <div className="form-group col-md-4">
                        <label>Name:</label>
                        <input
                          name="nonMemberName"
                          value={this.state.nonMemberName}
                          onChange={this.handleChange}
                          type="text"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <label>Mobile Number:</label>
                        <input
                          name="nonMemberPhone"
                          value={this.state.nonMemberPhone}
                          onChange={this.handleChange}
                          type="text"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <label>Email:</label>
                        <input
                          name="nonMemberEmail"
                          value={this.state.nonMemberEmail}
                          onChange={this.handleChange}
                          type="text"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-4">
                        <label>Posted by: {this.state.postedBy}</label>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <button onClick={this.handleSubmit} className="btn btn-info">
                  &nbsp; Save &nbsp;
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Giving;
