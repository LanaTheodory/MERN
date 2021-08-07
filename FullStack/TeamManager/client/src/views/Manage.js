import React , {useState, useEffect} from 'react'
import TableComponent from '../componenets/TableComponent'
import TableConstMatch from '../componenets/TableConstMatch'
import axios from'axios'

const Manage = () => {
    
    const [teams, setTeams] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/team")
        .then(res => {setTeams(res.data)})
        .catch(err => console.log(err))
       
       
    }, [])
    return (
        
        <div>
            <TableComponent cols={TableConstMatch()} data={teams} ></TableComponent>
          
        </div>
    )
}

export default Manage
