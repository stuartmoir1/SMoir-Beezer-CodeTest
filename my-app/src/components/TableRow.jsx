import React from 'react'
import Rating from './Rating'
import Title from './Title'

function TableRow(props){
  //console.log('TableRow...')
  const row = props.row
  const ratings = row.appDetails.map(details => {
    return (
      <Rating className='app-rating' key={(Object.keys(details)).toString()} details={details} onClick={props.onClick} accId={row.accId}/>
    )
  })
  const titles = row.appDetails.map(details => {
    return (
      <Title className='app-title' key={(Object.keys(details)).toString()} details={details} />
    )
  })

  return(
    <tbody>
      <tr>
        <td key={row.userId}>{row.userId}</td>
        <td key={row.userName}>{row.userName}</td>
        <td key={row.accId}>{row.accId}</td>
        <td>{titles}</td>
        <td>{ratings}</td>
      </tr>
    </tbody>
  )
}

export default TableRow