import React, {useState} from 'react'
import { Button, Card, TextField} from '@material-ui/core';


const FormComponent = (props) => {

    const [name, setName] = useState("")
    const [position, setPosition] = useState("")




    const submitHandler = (e) => {
        e.preventDefault();
        props.formFun({name, position});

    }

  
    return (
       
            <Card style={{ width: "20rem", height: "20rem" , padding: "3rem"}} >
                <form onSubmit={submitHandler}>
                {props.error && props.error.map((err, index) => <p key={index}>{err}</p>) }


               <TextField id="outlined-basic" label={props.label1} value={name} variant="outlined"  onChange={e => setName(e.target.value)}/>
               <TextField id="outlined-basic" label={props.label2}  value={position} variant="outlined"  onChange={e => setPosition(e.target.value)}/>
                  
                    <Button variant="contained" color="secondary" type="submit" >{props.buttonValue}</Button>
                </form>
            </Card>
       
    )
}

export default FormComponent
