import React, {useState , useEffect} from 'react'
import { Link } from '@reach/router'
import axios from 'axios'


const Update = (props) => {

    const { id } = props;
    const [title, setTitle] = useState("");
    const [discription, setDiscription] = useState("");
    const [price, setPrice] = useState();
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setTitle(res.data.title);
                setDiscription(res.data.discription);
                setPrice(res.data.price);
            })
    }, [])

    const handelSubmit = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/product/' + id, {
            title,
            discription,
            price
        })
            .then(res => console.log(res));
    }
    return (
        <div>
            <h1>Update a Person</h1>
            <form onSubmit={handelSubmit}>
                <p>
                    <label>Title</label><br />
                    <input type="text" name="title" value={title} onChange={(e) => { setTitle(e.target.value) }} />
                </p>
                <p>
                    <label>Description</label><br /> <input type="text" name="description"
                    value={discription} 
                    onChange={(e) => { setDiscription(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}
export default Update
