import React from 'react'

function AppDetails(props){
  //console.log('AppDetails...')
  const details = props.details
  const title = (Object.keys(details)).toString()
  //const rating = details[(Object.keys(details)).toString()]
  //const toDisplay = title + '; ' + rating + '/5' 
  return (
    <div>
      {title}
      <div className='app-rating'>
        <span id='star5'>☆</span>
        <span id='star4'>☆</span>
        <span id='star3'>☆</span>
        <span id='star2'>☆</span>
        <span id='star1'>☆</span>
      </div>
    </div>
  )
}

export default AppDetails