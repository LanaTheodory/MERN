import React, {useState , useEffect} from 'react'
// import { Link } from '@reach/router'
import axios from 'axios'
import { navigate } from '@reach/router'
import Form from '../components/Form'
import Button from '../components/Button'


const Update = (props) => {

    const { id } = props;
    const [title, setTitle] = useState("");
    const [discription, setDiscription] = useState("");
    const [price, setPrice] = useState();
    const [loaded, setloaded] = useState(false)
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setTitle(res.data.title);
                setDiscription(res.data.discription);
                setPrice(res.data.price);
                setloaded(true);
            })
    }, [id])

    const handelSubmit = (productt) => {
   
        axios.put('http://localhost:8000/api/product/' + id, productt)
            .then(res => console.log(res));
            navigate('/product')
            
    }

    
    return (
        <div>
            <h1>Update a Product</h1>

           {loaded && <Form title={title}
                   price ={price}
                   discription={discription}
                   formSubmit={handelSubmit}></Form>

    }
              <Button  value={"go back"} successCallback={()=>navigate("/product")}/>
        </div>
    )
}
export default Update
