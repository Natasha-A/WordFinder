import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import { BsSearch } from "react-icons/bs";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsFillBookmarkFill } from "react-icons/bs";
import { BsPlayFill } from "react-icons/bs"
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';

function Dictionary() {
  const { word } = useParams(); // get word from search request

  console.log(word);

  return (
    <div>
        <Stack className="justify-content-between pb-3" direction="horizontal">
          <Button><BsArrowLeftShort /></Button>
          <Button><BsFillBookmarkFill /></Button>
        </Stack>

        <Stack className="justify-content-between p-4" direction="horizontal" Style="background-color: white">
              <h2 Style="color: #9078D6"> { word }</h2> 
              <Button><BsPlayFill /></Button>   
          </Stack>
    </div>
  );
}

/*
 ********** Example on how to fetch information from json **********
function displayDictionary(json) {

  const dictionaryAPI = async() => {
    try {
      const data=await axios.get('https://www.dictionaryapi.com/api/v3/references/collegiate/json/voluminous?key=' + word);
      console.log(data);
    } catch(error) {
      console.log(error);
    }
  };

      // called every time our variable changes
  useEffect(() => {
    dictionaryAPI();
  }, []);

  // extract into 
  // return 
  return (
  <div>
    for (i=0; i < json.length; i++) {
      json[i].word
      json[i].phonetic
    }
  </div>);

}

function displaySynonyms(word) {
  const dictionaryAPI = async() => {
    try {
      const data=await axios.get('https://wordsapiv1.p.mashape.com/words/' + word + "/everything" );

      console.log(data);
      displayInfo(data);
    } catch(error) {
      console.log(error);
    }
  };

  
  <div>
    for (i=0; i < json.length; i++) {
      json[i].word
      json[i].phonetic
    }
 
  </div>

    // called every time our variable changes
  useEffect(() => {
    dictionaryAPI();
  }, []);

}
*/

  function Audio() {
    //comment
  }

export default Dictionary;
//comment
