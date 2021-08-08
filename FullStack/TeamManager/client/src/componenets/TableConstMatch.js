import React , {useState, useEffect} from 'react'
import ButtonComponent from './ButtonComponent'


const TableConstMatch = (props) => {

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
