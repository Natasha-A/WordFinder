import { useState, useEffect, Fragment } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import { BsArrowLeftShort } from "react-icons/bs";


function Thesaurus() {
  const { word } = useParams(); // word input
  const [results, setResults] = useState([ ]); // words to display  
  const navigate = useNavigate(); // navigate using back arrow 

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
       <Stack className="justify-content-between pb-3" direction="horizontal">
          <Button className="customButton" Style="font-size:2.5em" ><BsArrowLeftShort onClick={() => {navigate('../')}}/></Button>
          </Stack>
             <Stack className="customCard justify-content-between border p-4 h-50 font-weight-bolder shadow" direction="horizontal" Style="align-items: center; background-color: white">
              <h2 Style="color: #9078D6;"> { word }</h2> 
          </Stack>
      <div>
      <hr className="mt-3 mb-3" Style="color:#9078D6; display: idx === 0 ? 'none' : 'block'"/>
          {results.map((definition, idx) => 
             <Container className="customCard justify-content-between border p-4 mt-4 h-50 font-weight-bolder shadow" Style="color: #949396; align-items: center; background-color: white;">
                <div><b>Definition</b>: {definition.definition}</div> <br></br>
                {definition.synonyms &&
                    <span><b>Synonyms</b>: {definition.synonyms.map(synonym => <span>{synonym}</span>)}</span>
                }
           </Container>
          )}
      </div>
    </div>
  );
}


export default Thesaurus;
//comment
