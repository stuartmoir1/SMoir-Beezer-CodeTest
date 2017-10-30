import React from 'react'

function Title(props){
  //console.log('Title...')
  const details = props.details
  const title = (Object.keys(details)).toString()
  return (
    <div className='app-title'>{title}</div>
  )
}

export default Title