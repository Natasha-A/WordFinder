import axios from "axios";
import React, { useEffect } from "react";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Bookmarks from "./components/Bookmarks.js";
import Homepage from './components/Homepage.js';
import Dictionary from './components/Dictionary.js';
import Container from 'react-bootstrap/Container';
import './styles.scss';

function App() {
  return (
    <div>
      <Container className='text-center p-4 mt-4'>
      <Container className="m-12 .container-lg mt-2" Style="width: 70%;">
      <Routes>
          <Route path='/' element={<Homepage />}/>
           <Route exact path='/bookmarks' element={<Bookmarks />} />
            <Route path="/search/:word" element={<Dictionary/>}/>
        </Routes>
        </Container>
      </Container>
    </div>
  );
}

export default App;