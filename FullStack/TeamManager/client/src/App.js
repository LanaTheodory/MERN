
import './App.css';
import {Link, Router} from '@reach/router' ;
import Show from './views/Show';
import Add from './views/Add';
import Manage from './views/Manage';

function App() {
  return (
    <div className="App">
      <Link to="/players/list">Manage Players</Link>
      <span> | </span>
      <Link to="/status/game/1">Manage Players' Status</Link>
      <Router>
        <Show path="/players/list"/>
        <Add path="/players/addplayer"></Add>
        <Manage path="/status/game/:id"></Manage>

      </Router>
    
    </div>
  );
}

export default App;
