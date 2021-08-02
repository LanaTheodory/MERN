import React , {useState, useEffect} from 'react'
import axios from 'axios';

const Detail = (props) => {
    const [product, setProduct] = useState({});
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + props.id)
        .then(res => setProduct(res.data))
    }, [])
    return (
        <div>
            <h1>Tittle: {product.title}</h1>
            <h2>Description: {product.discription}</h2>
            <h2>Price: {product.price}</h2>
        </div>
      
    )
}

export default Detail
