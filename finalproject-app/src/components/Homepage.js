import axios from "axios";
import React from "react";
import Container from 'react-bootstrap/Container';

// boostrap components 
// box, typography, field input, iconbutton, icon button
function Homepage() {
  return (
    <div>
      <Container>
        <img src="./src/assets/bookIcon.png" alt="Book"/>
      </Container>
    </div>
  );
}

export default Homepage;