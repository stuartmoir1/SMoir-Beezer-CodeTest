import React from 'react'

function AppDetails(props){
  //console.log('AppDetails...')
  const details = props.details
  const title = (Object.keys(details)).toString()
  const rating = details[(Object.keys(details)).toString()]
  const toDisplay = title + '; ' + rating + '/5' 
  return (
    <div>
      {toDisplay}
    </div>
  )
}

export default AppDetails