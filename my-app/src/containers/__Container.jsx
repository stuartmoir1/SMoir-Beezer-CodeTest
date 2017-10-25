import React, {Component} from 'react'

class Container extends Component{

  render(){
 
    const users = this.props.data['users']
    const accs = this.props.data['accounts']
    let dashboard = []

    for (let user in users){

      const userId = user
      const userName = users[user]['name']
      const accId = users[user]['account']
      let titles = []

      for (let acc in accs){
        if (acc == accId){
          const apps = (Object.keys(accs[acc]['apps']))
          //console.log(apps)
          for (let app of apps){
            const title = accs[acc]['apps'][app]['title']
            //console.log(title)
            titles.push(title)
          }
          break // Only one account per user.
        }
      }

      const userDetails = {
        'userId': userId,
        'userName': userName,
        'accId': accId,
        'titles': titles
      }
      dashboard.push(userDetails)
    }

    console.log(dashboard)

    return (
      null
    )
  }
}

export default Container