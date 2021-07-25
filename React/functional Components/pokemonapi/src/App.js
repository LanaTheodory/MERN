
import './App.css';
import { useEffect , useState} from 'react';


function App() {
 
    const [names, setNames] = useState([]);
    
    // const showNames = () =>{
    //   return(
        
    //     names.length > 0 ? names.map((names, index)=>{
    //         return (<div key={index}>{names.name}</div>)
    //     }) : "loading"
 
    //   )
    // }
 
    const showNames = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?offset=807&limit=311")
            .then(response => response.json())
            .then(response => setNames(response.results))
             
        
       
    };
 
    return (
      <>
      <button onClick={showNames }>Show Names</button>
      {names.length > 0 ? names.map((names, index)=>{
            return (<div key={index}>{names.name}</div>)
        }) : ""}
 
      )
   
      </>
    );



  
}

export default App;
