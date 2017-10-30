import React from 'react'
import TableRow from './TableRow'

function Table(props){
  //console.log('Table...')
  const rows = props.data.map(row => {
    return (
      <TableRow className='app-table-row' key={row.userId} row={row} onClick={props.onClick}/>
    )
  })
  return (
    <table>
      <th>User ID</th>
      <th>User Name</th>
      <th>Acc ID</th>
      <th>Title</th>
      <th>Rating</th>
      {rows}
    </table>
  )
}

export default Table