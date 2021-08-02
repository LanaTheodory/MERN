import { Link } from '@reach/router'
import axios from 'axios'
import React from 'react'

const List = (props) => {

    const deleteProduct = (id) => {
        axios.delete("http://localHost:8000/api/product/" + props.id)
        .then(res => props.removeProduct(id) )
    }
    return (
        <div>
        {props.product.map((product, i)=>{
            return <p key={i}> 
             <button onClick={(e)=>{deleteProduct(product._id)}}> Delete </button>
                <Link to={"/product/" + product._id}>details</Link>
                {product.title}, Description: {product.discription} , Price :{product.price}</p>
                
        })}
    </div>
    )
}

export default List
