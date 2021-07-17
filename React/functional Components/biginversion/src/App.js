
import './App.css';
import PersonComponent from './PersonComponent';

function App() {
  return (
    <div className="App">
        <PersonComponent firstName="Jane" lastName="Doe" age={45} hair="black"></PersonComponent>
        <PersonComponent firstName="Jane" lastName="Doe" age={45} hair="black"></PersonComponent>
        <PersonComponent firstName="Jane" lastName="Doe" age={45} hair="black"></PersonComponent>
        <PersonComponent firstName="Jane" lastName="Doe" age={45} hair="black"></PersonComponent>
    </div>
  );
}

export default App;
