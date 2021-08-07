import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { Button,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody} from '@material-ui/core';


const TableComponent = ({cols, data}) => {

    
        return (
            <div>
               
          <Table  >
            <TableHead>
              <TableRow>
              {cols.map((headerItem, index) => (
                           <TableCell key={index}>{headerItem.title}</TableCell>
                        ))}

              </TableRow>
            </TableHead>
    
            <TableBody>

                    {data.map((item, index) => (
                         <TableRow key={index}>
                            {cols.map((col, key) => (
                               <TableCell key={key}>{col.render(item)}</TableCell>
                            ))}
                        </TableRow>
                    ))}
            </TableBody>
          </Table> 
         
            </div>
        )
    }
    

export default TableComponent
