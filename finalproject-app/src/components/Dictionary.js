import { useState, useEffect } from 'react';


function Dictionary() {
  return (
    <div>
      Dictionary
    </div>
  );
}


/*function DictionaryFetch() {
  const [word, Word] = useState({});
  const [definition, Definition] = useState({});

  useEffect(() => {
    // api key 
    fetch("").then(x => x.json()).then(json => {
      word(json.t);
      Definition(json.t[0]);
    });
  }, []);
  return (<div>

    {Object.keys(word).map((key) => (<div> {key} : {word[key]} </div>))}
    {Object.keys(description).map((key) => (<div>{key} : {description[key]}</div>))}

  </div>
  )
}*/

/*Alternative FETCH request method using Axios 
  const dictKey = 'db581e8e-4d30-455a-a8b9-d1de2f4dc84c';
  const thesKey = '1b9cfecf-a383-4f09-93e2-745e7003f274';

  const dictionaryAPI = async() => {
    try {
      const data=await axios.get('https://www.dictionaryapi.com/api/v3/references/collegiate/json/voluminous?key=' + dictKey);
      console.log(data);
    } catch(error) {
      console.log(error);
    }
  };

  // called every time our variable changes
  useEffect(() => {
    dictionaryAPI();
  }, []); */

export default Dictionary;
