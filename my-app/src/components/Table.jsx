import React, {Component} from 'react'
import TableRow from './TableRow'

class Table extends Component{

  render(){
    //console.log('Table, render...')
    const data = this.props.data
    return (
      <table>
        <th>User ID</th>
        <th>User Name</th>
        <th>Acc ID</th>
        <th>App Details (title; rating)</th>
        {data.map(row => {
          return (
            <TableRow key={row.id} row={row} />
          ) 
        })}
      </table>
    )
  }
}

export default Table