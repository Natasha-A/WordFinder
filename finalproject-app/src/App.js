import axios from "axios";
import React, { useEffect } from "react";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Bookmarks from "./components/Bookmarks.js";
import Homepage from './components/Homepage.js';
import Dictionary from './components/Dictionary.js';

import './styles.scss';

function App() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Homepage />}/>
           <Route exact path='/bookmarks' element={<Bookmarks />} />

             {/*Since search is dynamic, we use the param to load the 
             correct defintion/synonyms */}
            <Route path="/search/:word" element={<Dictionary/>}/>
        </Routes>
    </div>
  );
}

export default App;