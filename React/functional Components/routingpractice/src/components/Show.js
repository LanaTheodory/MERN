import React from 'react'

const Show = (props) => {
    const {variable , color , bgcolor} = props;
    return (
        <div style={{color:color, backgroundColor: bgcolor, textAlign:"center"}}>
          {
              isNaN(variable)? variable === "welcome"? { variable } : `the word is: ${variable}` : `the number is: ${variable}`
          }
        </div>
    )
}

export default Show
