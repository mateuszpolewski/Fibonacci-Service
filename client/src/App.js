import React from 'react';
import './App.css'
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import {FibCalc, Home, Documentation} from "./components";
function App() {
    return (
      <div className="App">
      <Router>
       <ul className="App-header">
              <li className="Li-header">
                <Link to="/" className="LinkText">Home</Link>
              </li>
              <li className="Li-header">
                <Link to="/fibcalc" className="LinkText">FibCalc</Link>
              </li>
              <li className="Li-header">
                <Link to="/documentation" className="LinkText">Documentation</Link>
              </li>
      </ul>
      <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/fibcalc' element={< FibCalc />}></Route>
        <Route exact path='/documentation' element={< Documentation />}></Route>
      </Routes>
      </Router>
      </div>
  )
}
export default App;