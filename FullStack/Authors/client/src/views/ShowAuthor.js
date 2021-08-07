import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { Button,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody} from '@material-ui/core';

import { Link } from '@reach/router';
import ButtonComponent from '../components/ButtonComponent';




const ShowAuthor = () => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/author")
        .then(res => {setAuthors(res.data) })
        .catch(err => console.log(err))
       
    }, [authors])

    const removeFromDom = Id => {
        setAuthors(authors.filter(authors => authors._id != Id))
        
    }

    return (
        <div>
           
      <Table  >
        <TableHead>
          <TableRow>
            <TableCell>Author</TableCell>
            <TableCell >Actions available</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {authors.map((authorr , i) => (
            <TableRow key={i}>
              <TableCell>
                {authorr.name}
                {i}
              </TableCell>
              <TableCell >
                  <ButtonComponent id={authorr._id} successCallback={removeFromDom}></ButtonComponent>
                  <Link to={"/author/" + authorr._id} >Edit</Link>
                  </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table> 
     
        </div>
    )
}

export default ShowAuthor
