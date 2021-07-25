import  {useState} from 'react'


const FormComponent = (props) => {
    const [color, setColor] = useState("");
    const [height , setHeight] = useState();
    const [width , setWidth] = useState();
    
    const handleSubmit = (e) => {
        e.preventDefault();
       props.boxInfo({color, width, height}); 
       setColor("");
       setWidth(0);
       setHeight(0);
       
    };
    return (
        <>
        <div>
            <form onSubmit={ handleSubmit }>
            <h1>Color</h1>
            <textarea 
                rows="4"
                cols="50"
                placeholder="Enter a color here"
                onChange={ (e) => setColor(e.target.value) }
                value={ color }
            ></textarea>
            
            <input type="number" placeholder="height"  onChange={ (e) => setHeight(e.target.value)} value={height} ></input>
            <input type="number" placeholder="width"  onChange={ (e) => setWidth(e.target.value) } value={width} ></input>

            <input type="submit" value="Set Color" />
        </form>
        </div>
      
        </>
    )
}

export default FormComponent

