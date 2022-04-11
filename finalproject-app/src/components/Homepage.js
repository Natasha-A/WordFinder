import axios from "axios";
import React from "react";
import Container from "react-bootstrap/Container";
import "../Styles.css";
import Form from "react-bootstrap/Form";
import { BsSearch } from "react-icons/bs";
import Button from "react-bootstrap/Button";

// practice bootstrap tonight!

function Homepage() {
  return (
      <Container className=" text-center shadow rounder border p-4 mt-4">
        <img src="/assets/bookIcon.png"/>
        <h1 className="mb-3">Word Finder</h1>
    <Form>
    <BsSearch />
      <Form.Control type="text" placeholder="Type your word here..."/>
   </Form>    
   <Button>
      Bookmarks
    </Button>   
    </Container>
  );
}

export default Homepage;