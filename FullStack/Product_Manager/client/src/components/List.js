import React from 'react'

const List = (props) => {
    return (
        <div>
        {props.product.map((product, i)=>{
            return <p key={i}>{product.title}, Description: {product.discription} , Price :{product.price}</p>
        })}
    </div>
    )
}

export default List
