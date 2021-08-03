import React from 'react';
import axios from 'axios';

const Button = (props) => {
    const { id, successCallback } = props;
    const deleteProduct = e => {
        axios.delete('http://localhost:8000/api/product/' + id)
            .then(res=>{
                successCallback();
            })
    }
    return (
        <button onClick={deleteProduct}>
            {props.value}
        </button>
    )
}

export default Button
