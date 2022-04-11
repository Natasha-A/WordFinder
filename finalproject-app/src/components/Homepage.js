import axios from "axios";
import React from "react";
import Container from "react-bootstrap/Container";

// boostrap components 
// box, typography, field input, iconbutton, icon button
function Homepage() {
  return (
    <div>
      <Container>
        <img src="./src/assets/bookIcon.png" alt="Book"/>
        <h1 class="mb-3">Word Finder</h1>
        <div class="mb-3">
       <label for="exampleFormControlInput1" class="form-label">Email address</label>
       </Container>
    </div>
  );
}

export default Homepage;