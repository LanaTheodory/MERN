import axios from 'axios';
import React, {useState,useEffect} from 'react'
import FormComponent from '../components/FormComponent'
import { navigate } from '@reach/router';

const UpdateAuthor = ({ id}) => {
    const [Authname, setAuthname] = useState("");
    const [errors, setErrors] = useState([]);

useEffect(() => {
    axios.get("http://localhost:8000/api/author/" + id)
    .then(res => setAuthname(res.data.name))
   
}, [id])

const formFun = name =>{
    axios.put("http://localhost:8000/api/author/" + id, name )
    .then(res => navigate("/"))
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
            <FormComponent Aname={Authname} formFun={formFun} error={errors}></FormComponent>
        </div>
    )
}

export default UpdateAuthor
