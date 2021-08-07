import React from 'react'
import DeleteComponent from './DeleteComponent';

const TableConstList = (handleDelete) => {
    return [
        {
          title: 'ID',
          key: 'id',
          render: rowData => {
            return <span>{rowData._id}</span>;
          },
        },
        {
          title: 'Name',
          key: 'name',
          render: rowData => {
            return <span>{rowData.name}</span>;
          },
        },
       
        {
          title: 'Position',
          key: 'position',
          render: rowData => {
            return <span>{rowData.position}</span>;
          },
        },
        {
          title: 'Action',
          key: 'action',
          render: rowData => {
              return <DeleteComponent id={rowData._id} successCallback={handleDelete} ></DeleteComponent>
            // return <button onClick={() => handleDelete(rowData._id)}>Delete</button>;
          },
        },
      ];
    };
export default TableConstList
