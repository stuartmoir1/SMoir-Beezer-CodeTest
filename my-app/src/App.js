import React, { Component } from 'react';
import Table from './components/Table'
import fire from './other/firebase.js'
import {dashboardData} from './other/database_data.js'

import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      data: {}
    }
  }

  componentDidMount(){
   const data = fire.database().ref('/')
    data.on('value', (snapshot) => {
      const data = snapshot.val()
      this.setState({
        data: data
      })
    })
  }

  render() {
    //console.log(this.state.data)
    const data = dashboardData(this.state.data)
    console.log('data:', data)

    const seed =[{
      userId: "00L91c7cvUaghNmGlC0lJa9eZ102",
      userName: "Randle McMurphy",
      accId: "-Kd_teAAXcw2b5MyFPIT",
      appDetails: [
        {"One Flew Over The Cuckoo’s Nest": 4}
      ]
    }, {
      userId: "0YRaZC6EUrc5sc8Ab4AR7Zp7ig93",
      userName: "Norman Bates",
      accId: "-Kd_ZCjRYSGzISxY_5Wi",
      appDetails: [
        {"Psycho": 5}
      ]
    }, {
      userId: "11yVrZ6TK3ZuKpITF8UVGF4ILlC3",
      userName: "Wednesday Addams",
      accId: "-Kda3ClE2i0vZzyh7uh0",
      appDetails: [
        {"The Addams Family": 2},
        {"Addams Family Values": 3},
        {"Addams Family Reunion": 4}
      ]
    }]

    return (
      <div>
        <Table data={data} />
      </div>
    );
  }
}

export default App;

//if (data.length !== 0){
//  console.log('userID:', data[6]['userId'])
//  console.log('userName:', data[6]['userName'])
//  console.log('accID:', data[6]['accId'])
//  console.log('account details:', data[6]['appDetails'])
//
//  const key = Object.keys(data[6]['appDetails'][0])
//  console.log('title:', key.toString())
//  console.log('rating:', data[6]['appDetails'][0][key])
//}