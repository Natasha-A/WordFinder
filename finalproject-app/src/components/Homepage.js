import axios from "axios";
import React from "react";
import Container from "react-bootstrap/Container";
import "../styles.scss";
import Form from "react-bootstrap/Form";
import { BsSearch } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import { useState, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Bookmarks from "./Bookmarks";

function Homepage( { parentToChild }) {
  {/*useState for word input field rendering*/}
  const [word, setWord] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (event) => {
  event.preventDefault(); // prevents from refreshing screen

  // error checking for word input 
  // i.e.) check if word exists and has no spaces  
  const trimmedWord = word.trim().toLowerCase();
  if (!trimmedWord || (trimmedWord.split(' ').length > 1)) return;
  navigate(`/search/${trimmedWord}`); // push the value to defintions comp

  }

  const jsonText = JSON.parse(parentToChild);
  const jsonArray = Object.keys(jsonText).slice(-3);
  console.log(jsonArray)

  return (
     <div>
          <img src="/assets/bookIcon.png"/>
          {/* Title */}
          <h1 className="mb-3"Style="color:white"> Word Finder</h1>

          {/* Textbox Form*/}
          <Stack direction="horizontal" gap={0}>
            <Button variant="secondary shadow-sm" aria-pressed="false" type="submit" onSubmit={handleSubmit}><BsSearch /></Button>

            <Form Style="width:100%" onSubmit={handleSubmit}>
              <Form.Control className="input me-auto shadow" placeholder="Type your word here..." value={word} onChange={event => setWord(event.target.value)}/>
            </Form>


          </Stack>

          {/* Box Container*/}
          <Stack direction="vertical" gap={2} Style="height: vh;">  
          <section className=" border p-4 mt-4 h-50 font-weight-bolder shadow">

            {/* Word of Day*/}
            <h2 Style="color: #9078D6">Word of Day</h2>
              <b Style="font-size:20px">Sample</b>

                {/* Definition */}
               <p>Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. È sopravvissuto non sol.</p>

                {/* Example */}
              <div className="border-start border-3 " Style="margin-left:10px; padding-left:10px;">
                <p>Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. È sopravvissuto non sol.</p>
              </div>
            </section>
            {/* Bookmarks */}
            <section className="border p-4 mt-4 h-50 font-weight-bold font-weight-bolder shadow ">
            <h2>Recent Bookmarks</h2>

             {/* Map out array of elements */}
             { jsonArray.map(word => 
             <Link Style="text-decoration:none" to={`/search/${word}`}>
               <Container>
                 <h5 Style="text-transform: capitalize; margin-bottom:0.5em;">{word}</h5>
               </Container>
               </Link>
             )}
             <div Style="display: flex; justify-content: space-between">
               <div></div>
              <Link to="/bookmarks">
                <Button Style=" border:2px solid red">View All</Button>
              </Link>
             </div>
        

            </section>
          </Stack>
      </div>
  )
}


export default Homepage;