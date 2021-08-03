import './App.css';
import Main from './views/Main';
import { Router } from '@reach/router';
import Detail from './views/Detail';
import Update from './views/Update';

const App =() =>  {
  return (
    <div className="App">
      <Router>
     <Main path="/product/"/>
     <Detail path="/product/:id" />
     <Update path="/product/:id/edit"></Update>
     </Router>
    </div>
  );
}

export default App;
