import React, {useState} from 'react'
import { Button, Card, TextField} from '@material-ui/core';


const FormComponent = ({Aname, formFun, error}) => {

    const [name, setName] = useState(Aname)

    const submitHandler = (e) => {
        e.preventDefault();
        formFun({name});

    }

  
    return (
       
            <Card style={{ width: "20rem", height: "20rem" , padding: "3rem"}} >
                <form onSubmit={submitHandler}>
                {error && error.map((err, index) => <p key={index}>{err}</p>) }


               <TextField id="outlined-basic" label="Name" value={name} variant="outlined"  onChange={e => setName(e.target.value)}/>
                    <Button variant="contained" color="secondary" type="submit" >submit</Button>
                </form>
            </Card>
       
    )
}

export default FormComponent
