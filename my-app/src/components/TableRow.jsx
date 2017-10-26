import React, {Component} from 'react'
import AppDetails from './AppDetails'

class TableRow extends Component{

  render(){
    //console.log('TableRow, render...')
    const row = this.props.row
    return(
      <tbody>
        <tr>
          <td key={row.userId}>{row.userId}</td>
          <td key={row.userName}>{row.userName}</td>
          <td key={row.accId}>{row.accId}</td>
          <td>
            {row.appDetails.map(details =>{
              return (
                <AppDetails key={(Object.keys(details)).toString()} details={details} />
              )
            })}
          </td>
        </tr>
      </tbody>
    )
  }
}

export default TableRow