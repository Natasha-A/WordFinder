import axios from "axios";
import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import "../styles.scss";
import Form from "react-bootstrap/Form";
import { BsSearch, BsWindowSidebar } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import { useState, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Bookmarks from "./Bookmarks";
import moment from "moment";

function Homepage( { recentBookmarks }) {
  {/*useState for word input field rendering*/}
  const [word, setWord] = useState("");
  const [wordOfDay, setWordOfDay] = useState("");
  const [wdDef, setwdDef] = useState([]);

  const navigate = useNavigate();
  const handleSubmit = (event) => {
  event.preventDefault(); // prevents from refreshing screen

  // error checking for word input 
  // i.e.) check if word exists and has no spaces  
  const trimmedWord = word.trim().toLowerCase();
  if (!trimmedWord || (trimmedWord.split(' ').length > 1)) return;
  navigate(`/search/${trimmedWord}`); // push the value to defintions comp

  }

  const onSynonyms = (event) => { // for synonyms search
    event.preventDefault(); 
    const trimmedWord = word.trim().toLowerCase();
    if (!trimmedWord || (trimmedWord.split(' ').length > 1)) return;
    navigate(`/synonyms/${trimmedWord}`); 
  }

  // display recent bookmarks (i.e. last 3)
  const jsonText = JSON.parse(recentBookmarks);
  const jsonArray = Object.keys(jsonText).slice(-3);


  // fetch word of day API 
    const fetchWordDay = async () => {
      try {
        const resp = await axios.get(`https://random-word-api.herokuapp.com/word`);
        setWordOfDay(resp.data[0]);
      } catch(err) {
        console.log(err);
      }
    }

   // load store word of day 
    useEffect(() => {
      wordOfDayRefresh()
  }, []); 


  // time stamp between 24 word refresh 
  function wordOfDayRefresh() {
    var now = moment();
    var currentDate = now.format('MMMM D YYYY'); // 18
    var nextDay = now.add(1, 'days').format('MMMM D YYYY'); // 19

    setWordOfDay(window.localStorage.getItem('wordOfDay'));

    if (window.localStorage.getItem('currentDate') != nextDay) {
        console.log("Its a new day.")
        setWordOfDay(window.localStorage.getItem('wordOfDay'));
        window.localStorage.setItem('currentDate', nextDay);
    }    
    // create a t
  }

  return (
     <div>
          <img src="/assets/bookIcon.png"/>
          {/* Title */}
          <h1 className="mb-3"Style="color:white"> Word Finder </h1>

          {/* Textbox Form*/}
          <Stack direction="horizontal" gap={0}>
            <Button variant="secondary shadow-sm" aria-pressed="false" type="submit" onClick={handleSubmit} ><BsSearch /></Button>

            <Form Style="width:100%" onSubmit={handleSubmit}>
              <Form.Control className="input me-auto shadow" placeholder="Type your word here..." value={word} onChange={event => setWord(event.target.value)}/>
            </Form>
            
            <button onClick={onSynonyms}>Syn</button> 

          </Stack>

          {/* Box Container*/}
          <Stack direction="vertical" gap={2} Style="height: vh;">  
          <section className=" border p-4 mt-4 h-50 font-weight-bolder shadow">

            {/******* Word of Day Comp ********/}
            <h2 Style="color: #9078D6">            {wordOfDay}</h2>
              <b Style="font-size:20px">Sample</b>

                {/* Definition */}
               <p>Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. È sopravvissuto non sol.</p>

                {/* Example */}
              <div className="border-start border-3 " Style="margin-left:10px; padding-left:10px;">
                <p>Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. È sopravvissuto non sol.</p>
              </div>
              <div Style="display: flex; justify-content: space-between">
               <div></div>
              <Button className="customButton mt-1" Style="font-size:1.2em; background-color:#9078D6;" onClick={() => {fetchWordDay()}}>Generate Word</Button>
             </div>
            </section>
            {/* Bookmarks */}
            <section className="border p-4 mt-4 mb- h-50 font-weight-bold font-weight-bolder shadow ">
            <h2>Recent Bookmarks</h2>

             {/* Map out array of elements */}
             { jsonArray.map(word => 
             <Link Style="text-decoration:none; color:#b19fe8;" to={`/search/${word}`}>
               <Container>
                 <ul>
                 <li><h5 class="bookmarks" Style="text-transform: capitalize; margin-bottom:0.4em;font-size:1.3em; font-weight:600">{word}</h5></li>
                 </ul>
               </Container>
               </Link>
             )}
             <div Style="display: flex; justify-content: space-between">
               <div></div>
              <Link to="/bookmarks">
              <Button className="customButton mt-1" Style="font-size:1.2em; background-color:#9078D6;">View All</Button>
              </Link>
             </div>
        

            </section>
          </Stack>
      </div>
  )
}


export default Homepage;