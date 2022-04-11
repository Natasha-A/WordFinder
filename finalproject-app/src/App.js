import axios from "axios";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Home } from './components/Homepage.js'
import './Styles.css';

function App() {
  return (
    <div>
      <Router>
        <Route path="/">
          <Home />
        </Route>
      </Router>
    </div>
  );
}

export default App;