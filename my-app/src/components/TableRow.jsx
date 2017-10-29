import React from 'react'
import AppDetails from './AppDetails'

function TableRow(props){
  //console.log('TableRow...')
  const row = props.row
  const details = row.appDetails.map(details => {
    return (
      <AppDetails id='app-details' key={(Object.keys(details)).toString()} details={details} />
    )
  })
  return(
    <tbody>
      <tr>
        <td key={row.userId}>{row.userId}</td>
        <td key={row.userName}>{row.userName}</td>
        <td key={row.accId}>{row.accId}</td>
        <td>
          {details}
        </td>
      </tr>
    </tbody>
  )
}

export default TableRow