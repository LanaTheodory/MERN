import React, {useState , useEffect} from 'react';
import FormComponent from '../componenets/FormComponent';
import axios from 'axios';
import { navigate } from '@reach/router';

const Add = (props) => {
    const [errors, setErrors] = useState([])
    const [teamNew, setTeamNew] = useState([])

    const formFun = (team) => {
        axios.post("http://localhost:8000/api/team", team)
        .then(res=>{
            setTeamNew(res.data);
        
            navigate("/players/list"); 
        })  
        .catch(err=>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })    
                
    }
    return (
        <div>
           
            <FormComponent 
                label1="name"
                label2="position"
                error={errors}
                formFun={formFun}
                buttonValue="Add player">
            </FormComponent>
        </div>
    )
}

export default Add
