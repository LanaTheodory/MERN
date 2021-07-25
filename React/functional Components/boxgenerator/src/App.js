
import  {useState} from 'react'
import './App.css';
import BoxComponent from './components/BoxComponent';
import FormComponent from './components/FormComponent';


function App(props) {
  const [boxes, setBoxes] = useState([]);


  const boxInfo = ({color, width, height}) => {
    setBoxes([...boxes, {color, width, height}]);
  }
  return (
    <div className="App">
     <FormComponent boxInfo={boxInfo}/>
     <BoxComponent box={boxes}/>
    

    </div>
  );
}

export default App;
