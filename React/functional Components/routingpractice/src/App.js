import { Router } from '@reach/router';
import React from 'react';
import './App.css';
import Show from './components/Show';

function App() {
  return (
  <div className="root">
  <Router>
  <Show path="/home" variable={"home"}/>
  <Show path="/:variable"/>
  <Show path="/:variable"/>
  <Show path="/:variable/:color/:bgcolor"/>
  </Router>
  </div>
  );
}

export default App;
