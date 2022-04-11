import axios from "axios";
import React from "react";
import Container from "react-bootstrap/Container";
import { MDBCol, MDBIcon } from "mdbreact";



function Homepage() {
  return (
    <div>
      <Container>
        <img src="/assets/bookIcon.png"/>
        <h1 class="mb-3">Word Finder</h1>
        <div class="mb-3">
        <input type="text" class="form-control" id="search-form" aria-describedby="searchBy"/>
    </div>
    <MDBCol md="6">
      <div className="input-group md-form form-sm form-1 pl-0">
        <div className="input-group-prepend">
          <span className="input-group-text purple lighten-3" id="basic-text1">
            <MDBIcon className="text-white" icon="search" />
          </span>
        </div>
        <input
          className="form-control my-0 py-1"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
      </div>
    </MDBCol>

      </Container>
    </div>
  );
}

export default Homepage;