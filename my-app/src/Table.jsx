import React, {Component} from 'react'
import TableRow from './TableRow'

class Table extends Component{

  render(){
    //console.log('Table, render...')
    return (
      <table>
        <th>User ID</th>
        <th>User Name</th>
        <th>Acc ID</th>
        <th>App Details</th>
        {this.props.data.map(row => {
          return (
            <TableRow key={row.id} row={row} />
          ) 
        })}
      </table>
    )
  }
}

export default Table