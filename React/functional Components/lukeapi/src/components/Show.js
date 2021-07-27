import React from 'react'
import  {useState , useEffect} from 'react';
import {Router} from '@reach/router';
import axios from 'axios';

const Show = (props) => {
    const [responseData, setResponseData] = useState([]);
    const [errorMessage, setErrorMessage] = useState([]);

    const {category , id} = props;
    useEffect(()=>{
        axios.get('https://swapi.dev/api/'+ category +"/" + id )
            .then(response=>{setResponseData(response.data)})
            .catch(reject => {setResponseData({error:"These aren't the droids you're looking for"}
                ) 
                console.log(responseData);}
                
                )}
    , [id]); 
    return (

        <div>
            {responseData.error ? responseData.error : category === "people"?
           
            <div>
          <h1> Name : {responseData.name}</h1>
          <p> Hair color : {responseData.hair_color}</p>
          <p> Eye color : {responseData.eye_color}</p> 
          </div>: 
          <div>
          <h1> Name : {responseData.name}</h1>
          <p> Climate : {responseData.climate}</p>
          <p> gravity : {responseData.gravity}</p> 
          </div>
        }
        </div>
    
    )

}

export default Show
