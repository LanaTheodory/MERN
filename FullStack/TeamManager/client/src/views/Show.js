import React, {useState, useEffect} from 'react'
import TableComponent from '../componenets/TableComponent'
import TableConstList from '../componenets/TableConstList'
import axios from 'axios';

const Show = (props) => {
    const [teams, setTeams] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/team")
        .then(res => {setTeams(res.data)})
        .catch(err => console.log(err))
       
       
    }, [])


    const handleDelete =(Id) => {
        setTeams(teams.filter(teams => teams._id != Id))
    }
    return (
        <div>
            <TableComponent  data={teams} cols={TableConstList(handleDelete)}></TableComponent>
           
        </div>
    )
}

export default Show
