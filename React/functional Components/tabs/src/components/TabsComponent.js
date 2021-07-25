import $ from "jquery";


const TabsComponent = (props) => {

const tabs = ["This is the first tab","This is the second tab","This is the third tab"];

const onClickHandler = (e, value)=>{
    props.tab(value);
    $(".tabButton").css({"background-color":"white" , "color":"black"} );
    $(e.target).css({"background-color":"black" , "color":"white" });

}
return (
        <div>
        
          { tabs.map( (value , index)=>{
          return <button className="tabButton" onClick={ (e) => onClickHandler(e,value)} >Tab {index +1}</button>  
          }
                     ) 
          }
        </div>
    )
}

export default TabsComponent
