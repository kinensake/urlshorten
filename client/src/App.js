import React from 'react';
import './App.css';
import CardBoard from './components/CardBoard';
import CodeBoard from './components/CodeBoard';
import Nav from './components/Nav';
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Route exact path="/" component={CodeBoard}></Route>
        <Route exact path="/list" component={CardBoard}></Route>
      </div>
    </Router>
  );
}

export default App;
