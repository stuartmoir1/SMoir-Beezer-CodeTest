import React, {Component} from 'react'

class Container extends Component{

  render(){
    //console.log('Container, render...')
    console.log(this.props.data)

    let arr = []

    //console.log('USERS')
    const users = this.props.data['users']
    for (let user in users){
      // console.log('user id:', user, ', acc id:', users[user]['account'], ', name:', users[user]['name'])
      const obj = {'userId': user, 'accId': users[user]['account'], 'userName': users[user]['name'], 'titles': {}}
      arr.push(obj)
    }

    //console.log('Array', arr)

    //console.log('ACCOUNTS')
    const accs = this.props.data['accounts']
    for (let acc in accs){
      //const key = (Object.keys(accs[acc]['apps']).toString())
      console.log('apps:', Object.keys(accs[acc]['apps']))
      console.log
      //console.log('acc id:', acc, ', title:', accs[acc]['apps'][key]['title'])
    }

    arr.forEach((element) => {
      //console.log(element)
    })

    return (
      null
    )
  }
}

export default Container