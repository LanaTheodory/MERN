import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Form from '../components/Form';
import List from '../components/List';
const Main = () => {

  const [product, setProduct] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(()=>{
      axios.get('http://localhost:8000/api/product')
          .then(response=>{
            setProduct(response.data); 
            setLoaded(true);});
  },[product])
    
  const removeProduct = (id) => {
    setProduct(product.filter(product => product._id != id));
}
    return (
      <>
      <Form />
      <br></br>
      {loaded && <List product={product} removeProduct={removeProduct}/>}
    
      </>
    )
}
export default Main;