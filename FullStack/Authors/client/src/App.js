import './App.css';
import ShowAuthor from './views/ShowAuthor';
import UpdateAuthor from './views/UpdateAuthor';
import CreateAuthor from './views/CreateAuthor';
import { Link, Router } from '@reach/router';
import TabPanell from './components/TabPanel';



function App() {
  
    const styles = {
        card: {
            width: "200px", height: "1rem", color:"blue"
        },
       
    }
  return (
    <div className="App">
      <h1>Fav authors</h1>
      <TabPanell>
      </TabPanell>

      <Link to="/author/new">Add new Author</Link>
   
    <Router>
     <ShowAuthor path="/"></ShowAuthor> 
    <CreateAuthor path="/author/new"/>
    <UpdateAuthor path="/author/:id"></UpdateAuthor> 
    </Router> 
   
    </div>
  );
}

export default App;
