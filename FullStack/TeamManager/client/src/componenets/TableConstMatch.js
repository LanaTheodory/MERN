import React , {useState, useEffect} from 'react'
import ButtonComponent from './ButtonComponent'


const TableConstMatch = (props) => {
  //  const [style1, setStyle1] = useState({})
  //  const [style2, setStyle2] = useState({})
  //  const [style3, setStyle3] = useState({})
  // const changeColor = (num) => {
  //   if (num === 1){
  //     setStyle1({"color":"green"})
  //   } else if (num === 2){
  //     setStyle2({"color":"red"})
  //   } else{
  //     setStyle3({"color":"yellow"})
  //   }
  // }
  // const [playing, setPlaying] = useState(false);
  // const [notPlaying, setNotPlaying] = useState(false);
  // const [undecided, setUnDecided] = useState(true);
 
    return [
        {
          title: 'Name',
          key: 'name',
          render: rowData => {
            return <span>{rowData.name}</span>;
          },
        },
       
    
        {
          title: 'Action',
          key: 'action',
          render: rowData => {
              return ( 
              <>
              <ButtonComponent id={rowData._id} ></ButtonComponent>
                {/* <button id={rowData._id} status={rowData.game1} style={style1} onClick={() =>changeColor(1)}>playing</button>
                <button id={rowData._id} style={style2} onClick={() => changeColor(2)}>not playing</button>
                <button id={rowData._id} style={style3} onClick={() => changeColor(3)}>undecided</button>  */}
              </>
              )
 
          },
        },
      ];
    };
export default TableConstMatch
