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
    //console.log('data:', data)

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