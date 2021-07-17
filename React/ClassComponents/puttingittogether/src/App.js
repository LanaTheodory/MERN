import logo from './logo.svg';
import './App.css';
import PersonComponent from './PersonComponent';

function App() {
  return (
    <div className="App">
      <PersonComponent firstName="Jane" lastName="Doe" age="22" hairColor="black">
      </PersonComponent>
      <PersonComponent firstName="Jane" lastName="Doe" age="22" hairColor="black"></PersonComponent>
      <PersonComponent firstName="Jane" lastName="Doe" age="22" hairColor="black"></PersonComponent>
      <PersonComponent firstName="Jane" lastName="Doe" age="22" hairColor="black"></PersonComponent>
   
    </div>
  );
}

export default App;
