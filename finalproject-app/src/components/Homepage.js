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
//import moment from "moment";

function Homepage({ recentBookmarks }) {
  {/*useState for word input field rendering*/ }
  const [word, setWord] = useState("");
  const [wordOfDay, setWordOfDay] = useState([]);
  const [wdDef, setwdDef] = useState([]);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    // prevents from refreshing screen

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

  {/* Word Generator Component */ }

  // fetch word from API
  const fetchWordDay = async () => {
    try {
      const resp = await axios.get(`https://random-word-api.herokuapp.com/word`);
      setWordOfDay(resp.data);

    } catch (err) {
      console.log(err);
    }
  }

  // update word of day definitions 
  function wordOfDayUpdate() {
    fetchWordDay();
    console.log(wordOfDay)
    const fetchWordDesc = async () => {
      try {
        const resp = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordOfDay}`);
        console.log(resp.data)
        setwdDef(resp.data);
        setError("");          

      } catch (err) {
        console.log(wdDef);
        setError(err.message);          
      }
    }
    fetchWordDesc();
  }

  function display() {
    var output = "";
    if (error === "Request failed with status code 404") {
      output = "Sorry, no definition found.";
      return (
        <div> 
          <div className="subtitle" Style="font-size:1.3em;">
            {wdDef[0].word}
          </div>
          <div Style="color:#949396; font-size:1.1em">{output}</div>
          
        </div>
      )
    } else {
      return (
        <div>
          <div className="subtitle" Style="font-size:1.3em;">
          {wdDef[0].word}
          </div>
          {wdDef.map((def, idx) => 
            <Fragment key={idx}>
                {def.meanings.map(meaning =>
                  <div>
                    <Container Style="color: #949396; align-items: center; background-color: white;" key={Math.random()}>
                      <div class="partSpeech">{meaning.partOfSpeech}</div>
                      <div>{meaning.definitions.map((definition,idx) => 
                          <div key={definition.definition}>
                              {meaning.definitions.length > 1 && `${idx +1}. `}
                              {definition.definition}
                          </div>
                        )}
                        </div>
                    </Container>
                  </div>
                )}
            </Fragment>
          )}       
        </div>
      )
    }
  }

  return (
    <div>
      <img src="/assets/bookIcon.png" />
      {/* Title */}
      <h1 className="mb-3" Style="color:white"> Word Finder </h1>

      {/* Textbox Form*/}
      <Stack direction="horizontal" gap={0}>
        <Button variant="secondary shadow-sm" aria-pressed="false" type="submit" onClick={handleSubmit} ><BsSearch /></Button>

        <Form Style="width:100%" onSubmit={handleSubmit}>
          <Form.Control className="input me-auto shadow" placeholder="Type your word here..." value={word} onChange={event => setWord(event.target.value)} />
        </Form>
      </Stack>

      {/* Box Container*/}
      <Stack direction="vertical" gap={2} Style="height: vh;">
        <section className=" border p-4 mt-4 h-50 font-weight-bolder shadow">

          {/******* Word of Day Comp ********/}

          {/* Map out array of elements */}
          <h2 Style="pb-1 subtitle">Word of Day</h2>
          
          {display()}
          
          <div Style="display: flex; justify-content: space-between">
            <div></div>
            <Button className="customButton mt-1" Style="font-size:1.2em; background-color:#9078D6;" onClick={() => { wordOfDayUpdate() }}>Generate Word</Button>
          </div>
        </section>
        {/* Bookmarks */}
        <section className="border p-4 mt-4 mb- h-50 font-weight-bold font-weight-bolder shadow ">
          <h2>Recent Bookmarks</h2>

          {/* Map out array of elements */}
          {jsonArray.map(word =>
            <Link Style="text-decoration:none; color:#b19fe8;" to={`/search/${word}`}>
              <Container>
                  <h5 class="bookmarks" Style="text-transform: capitalize; margin-bottom:0.4em;font-size:1.3em; font-weight:600">{word}</h5>
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