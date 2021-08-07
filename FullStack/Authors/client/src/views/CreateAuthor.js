import React, {useState} from 'react'
import FormComponent from '../components/FormComponent'
import axios from 'axios';
import { navigate } from '@reach/router';

const CreateAuthor = (props) => {
    const [errors, setErrors] = useState([])

    const formFun = (name) => {
        axios.post("http://localhost:8000/api/author", name)
        .then(res=>navigate("/")) // If successful, do something with the response. 
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
            <FormComponent Aname="" formFun={formFun} error={errors}>

            </FormComponent>
        </div>
    )
}

export default CreateAuthor
