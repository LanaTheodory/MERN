import  {useState , useEffect} from 'react';
import axios from 'axios';
import { Link } from '@reach/router';


const Search = (props) => {
const [id, setId] = useState()
const [category, setCategory] = useState("people");


const handleSubmit = (e) => {
    e.preventDefault();
}

    
    return (
        <div>
    <form onSubmit={handleSubmit}>
       <select value={category} onChange={e => setCategory(e.target.value)}> 
   
      <option value="people">People</option>
      <option value="planets">Planets</option>
      </select>
      <input type="number" onChange={(e)=>setId(e.target.value)} value={id}></input>
      <button type="submit"> <Link to = {"/"+ category + "/" + id} >Search</Link></button>
    </form>
        </div>
    )
}

export default Search
