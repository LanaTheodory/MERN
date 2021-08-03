import React, { useState } from 'react'
import axios from 'axios';
const Form = (props) => {

    const [title, setTitle] = useState(props.title); 
    const [discription, setDesc] = useState(props.discription);
    const [price, setPrice] = useState(props.price);
    
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        props.formSubmit({title, discription, price})
        
    }
    //onChange to update firstName and lastName
    return (
        
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label><br/>
                <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="number" onChange={(e)=>setPrice(e.target.value)} value={price}/>
            </p>
            <p>
                <label>Description</label><br/>
                <input type="textarea" onChange={(e)=>setDesc(e.target.value)} value={discription}/>
            </p>
            <button>Submit </button>
        </form>
    )
}
export default Form