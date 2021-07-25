import React from 'react'

const BoxComponent = (props) => {
    
    return (
      <>
        <h2>Render Boxes</h2> 
        {props.box.map((bo ,index ) =>
        { 
        return (
            <div key={index} style={{background:bo.color , display:'inline-block' , width:bo.width+"px" , height:bo.height+"px" , margin:"5px"}} >
            {bo.color}
            </div>
                )
        }
                        )
        }
    </> 
    )
}

export default BoxComponent
