
import React, {useState} from 'react'
import axios from 'axios';
import { Button} from '@material-ui/core';

const DeleteComponent = ({id, successCallback}) => {
   //const [updatedTeam, setUpdatedTeam] = useState([])
            
    const deleteData= () => {
   
   axios.delete('http://localhost:8000/api/team/' + id)
       .then(res=>{
         successCallback(id); 
         console.log(res.data)
       })
}   
return (
    
   <Button onClick={deleteData}>
       Delete
   </Button> 
)

}

export default DeleteComponent
