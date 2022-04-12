import axios from "axios";
import React from "react";
import Container from "react-bootstrap/Container";
import "../Styles.css";
import Form from "react-bootstrap/Form";
import { BsSearch } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

function Homepage() {
  return (
      <Container className=" text-center p-4 mt-4">

        <Container className="m-12 .container-lg " Style="width: 70%">
          <img src="/assets/bookIcon.png"/>
          
          {/* Title */}
          <h1 className="mb-3"Style="color:white"> Word Finder</h1>

          {/* Textbox Form*/}
          <Stack direction="horizontal" gap={0}>
            <Button variant="secondary shadow-sm"><BsSearch /></Button>
            <Form.Control className="me-auto shadow" placeholder="Type your word here..." />
          </Stack>

          {/* Box Container*/}
          <Stack direction="vertical" gap={2} Style="height: vh;">  
          <div className="border p-4 mt-4 h-50 font-weight-bold font-weight-bolder shadow" Style="text-align: left; background-color:white; border-radius: 15px;">

            {/* Word of Day*/}
            <h2 Style="color: #9078D6">Word of Day</h2>
              <b Style="font-size:20px">Sample</b>

                {/* Definition */}
               <p>Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. È sopravvissuto non sol.</p>

                {/* Example */}
              <div className="border-start border-3 " Style="margin-left:10px; padding-left:10px;">
                <p>Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. È sopravvissuto non sol.</p>
              </div>
            </div>

            {/* Bookmarks */}
            <div className="border p-4 mt-4 h-50 font-weight-bold font-weight-bolder shadow" Style="text-align: left; background-color:white; border-radius: 15px;">
              <h2 Style="color: #9078D6">Bookmarks</h2>
              <b Style="font-size:20px">Bookmark 1</b>      
              <p><b Style="font-size:20px">Bookmark 2</b>  </p>    
            </div>
          </Stack>
    
        </Container>
   
    </Container>
  );
}

export default Homepage;