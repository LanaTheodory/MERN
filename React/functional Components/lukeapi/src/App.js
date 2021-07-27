import logo from './logo.svg';
import  {useState , useEffect} from 'react';
import './App.css';
import {Router} from '@reach/router';
import axios from 'axios';
import Show from './components/Show';
import Search from './components/Search';

function App() {


  return (
    <div className="App">
    <Search></Search>
      <Router>
        <Show path="/:category/:id"></Show>
      </Router>
    </div>
  );
}

export default App;
