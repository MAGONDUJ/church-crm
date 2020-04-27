import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  MDBBtn,
  MDBInput,
} from "mdbreact";
class LandingPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">AIC MILIMANI CRM</h1>
          <hr class="my-4" />
          <div className="row">
            <div className="col align-self-start"></div>
            <div className="col align-self-center"></div>
            <div className="col align-self-end">
              <MDBCard>
                <MDBCardBody>
                  <MDBCardHeader className="form-header deep-blue-gradient rounded">
                    <h3 className="my-3">
                      <MDBIcon icon="lock" /> Login:
                    </h3>
                  </MDBCardHeader>
                  <form action="/member">
                    <div className="grey-text">
                      <MDBInput
                        label="Type your email"
                        icon="envelope"
                        group
                        type="email"
                        validate
                        error="wrong"
                        success="right"
                      />
                      <MDBInput
                        label="Type your password"
                        icon="lock"
                        group
                        type="password"
                        validate
                      />
                    </div>

                    <div className="text-center mt-4">
                      <MDBBtn color="light-blue" className="mb-3" type="submit">
                        Login
                      </MDBBtn>
                    </div>
                  </form>
                </MDBCardBody>
              </MDBCard>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default LandingPage;
