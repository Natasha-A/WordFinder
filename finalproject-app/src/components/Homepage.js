import axios from "axios";
import React from "react";
import Container from "react-bootstrap/Container";
import "../styles.scss";
import Form from "react-bootstrap/Form";
import { BsSearch } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Homepage() {
  {/*useState for word input field rendering*/}
  const [word, setWord] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
  event.preventDefault(); // prevents from refreshing screen
  console.log(word)

  // error checking for word input 
  // i.e.) check if word exists and has no spaces  
  const trimmedWord = word.trim().toLowerCase();
  if (!trimmedWord || (trimmedWord.split(' ').length > 1)) return;
  navigate(`/search/${word}`); // push the value to defintions comp

  }

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
            <section className="border p-4 mt-4 h-50 font-weight-bold font-weight-bolder shadow customCard">
              <h2 Style="color: #9078D6">Bookmarks</h2>
              <div id="bookmarks">
              <b>Bookmark 1</b>      
              <p><b>Bookmark 2</b></p>
              </div>  
            </section>
          </Stack>
      </div>
  );
}

export default Homepage;