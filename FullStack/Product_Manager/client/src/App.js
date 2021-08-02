import logo from './logo.svg';
import './App.css';
import Main from './views/Main';
import { Router } from '@reach/router';
import Detail from './views/Detail';

const App =() =>  {
  return (
    <div className="App">
      <Router>
     <Main path="product/"/>
     <Detail path="product/:id" />
     </Router>
    </div>
  );
}

export default App;
