import axios from "axios";
import React, { useEffect } from "react";

function App() {
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
  }, []);

  // Homepage
  /*
  <div className="...">
 <Wordofday></Wordofday>
  <Boomark></Boomark>

  // Router - nav bar
  <Searchbar> // press enter
    <router>
      <Results />
    </router>
  </Searchbar>
  </div>*/
}

export default App;