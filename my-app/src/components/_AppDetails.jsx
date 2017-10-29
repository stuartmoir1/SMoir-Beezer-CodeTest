import React, {Component} from 'react'

class AppDetails extends Component{

  render(){
    //console.log('AppDetails, render...')
    const details = this.props.details
    const title = (Object.keys(details)).toString()
    const rating = details[(Object.keys(details)).toString()]
    const toDisplay = title + '; ' + rating + '/5' 
    return (
      <div>
        {toDisplay}
      </div>
    )
  }
}

export default AppDetails