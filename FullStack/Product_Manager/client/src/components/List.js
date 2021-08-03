import { Link } from '@reach/router'
import axios from 'axios'
import React from 'react'
import Button from './Button';

const List = (props) => {
    const {removeProduct} = props;
    const deleteProduct = (idd) => {
        axios.delete("http://localHost:8000/api/product/" + idd)
        .then(res => {removeProduct(idd) })
    }
    return (
        <div>
        {props.product.map((product, i)=>{
            return <p key={i}> 
             <Button id={product._id} value={"delete"}successCallback={()=>deleteProduct(product._id)}/>
                <Link to={"/product/" + product._id}>details</Link>
                {product.title}, Description: {product.discription} , Price :{product.price}</p>
            
        })}
    </div>
    )
}

export default List
