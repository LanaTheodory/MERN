import React from 'react'
import axios from 'axios';
import { Button} from '@material-ui/core';

const ButtonComponent = ( { id, successCallback }) => {
   

    const deleteAuthor= e => {
   
        axios.delete('http://localhost:8000/api/author/' + id)
            .then(res=>{
                successCallback();
            })
    }   
    return (
        <Button onClick={deleteAuthor}>
            Delete
        </Button>
    )
}
export default ButtonComponent
