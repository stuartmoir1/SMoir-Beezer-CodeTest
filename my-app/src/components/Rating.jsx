import React from 'react'

function Rating(props){
  //console.log('AppDetails...')
  const details = props.details
  const rating = details[(Object.keys(details)).toString()]
  const title = (Object.keys(details)).toString()
  let star1, star2, star3, star4, star5
  
  switch(rating){
    case 1:
      star1 = '✭'; star2 = '☆'; star3 = '☆'; star4 = '☆'; star5 = '☆'
      break
    case 2:
      star1 = '✭'; star2 = '✭'; star3 = '☆'; star4 = '☆'; star5 = '☆'
      break
    case 3:
      star1 = '✭'; star2 = '✭'; star3 = '✭'; star4 = '☆'; star5 = '☆'
      break
    case 4:
      star1 = '✭'; star2 = '✭'; star3 = '✭'; star4 = '✭'; star5 = '☆'
      break
    case 5:
      star1 = '✭'; star2 = '✭'; star3 = '✭'; star4 = '✭'; star5 = '✭'
      break
    default:
      star1 = '☆'; star2 = '☆'; star3 = '☆'; star4 = '☆'; star5 = '☆'
  }

  return (
    <div className='app-rating'>
      <span id='star1' onClick={() => props.onClick(1, title)}>{star1}</span>
      <span id='star2' onClick={() => props.onClick(2, title)}>{star2}</span>
      <span id='star3' onClick={() => props.onClick(3, title)}>{star3}</span>
      <span id='star4' onClick={() => props.onClick(4, title)}>{star4}</span>
      <span id='star5' onClick={() => props.onClick(5, title)}>{star5}</span>
    </div>
  )
}

export default Rating