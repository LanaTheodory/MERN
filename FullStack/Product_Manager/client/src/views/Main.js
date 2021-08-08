import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Form from '../components/Form';
import List from '../components/List';

const Main = (props) => {

  const [product, setProduct] = useState([]);
  const [loaded, setLoaded] = useState(false);
  
  useEffect(()=>{
      axios.get('http://localhost:8000/api/product')
          .then(response=>{
            setProduct(response.data); 
            setLoaded(true);});
  },[])
    
  const removeProduct = (id) => {
    setProduct(product.filter(product => product._id != id));
}
const createProduct = productt => {
  axios.post('http://localhost:8000/api/product', productt)
      .then(res=>{
          setProduct([...product, res.data]);
      })
}
    return (
      <div>
      <Form title="" discription="" price="" formSubmit={createProduct} />
      <br></br>
      {loaded && <List product={product} removeProduct={removeProduct}/>}
    
      </div>
    )
}
export default Main;