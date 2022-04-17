import { useState, useEffect, Fragment } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Stack from 'react-bootstrap/Stack';


function Thesaurus() {
  const { word } = useParams(); // word input
  const [results, setResults] = useState([ ]); // words to display  
  //const [exist, setExist] = useState(true) // check if word exists 

  const options = { //api info
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com',
      'X-RapidAPI-Key': '41cb374401mshe0235f6b1cbca83p1612d5jsn8bcb22e6a396'
    }
  };

  console.log(results);
  //fetch from api
  useEffect(() => {
    const fetchSynonyms = async () => {
      fetch(`https://wordsapiv1.p.rapidapi.com/words/${word}`, options)
      .then(response => response.json())
      .then(response => setResults(response.results)) //save into setSynonyms 
      .catch(err => console.error(err));
    }
    fetchSynonyms();
}, []);


  return (
    <div>
      <h1>Word: {word}</h1>
      <div>
          {results.map((definition, idx) => 
            <Stack className="customCard justify-content-between border p-4 h-50 font-weight-bolder shadow" direction="horizontal" Style="align-items: center; background-color: white">
                <div><b>Definition</b>: {definition.definition}</div>
                {definition.synonyms &&
                    <span><b>Synonyms</b>: {definition.synonyms.map(synonym => <span>{synonym}</span>)}</span>
                }
            </Stack>
          )}
      </div>
    </div>
  );
}


export default Thesaurus;
//comment
