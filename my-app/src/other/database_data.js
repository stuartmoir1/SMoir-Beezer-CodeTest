const dashboardData = (data) => {

  //console.log('dashboardData...')
  const users = data['users']
  const accs = data['accounts']
  let dashboard = []

  // Create dashboard data.
  for (let user in users){

    const userId = user
    const userName = users[user]['name']
    const accId = users[user]['account']
    let appDetails = []

    for (let acc in accs){
      if (acc === accId){
        const apps = (Object.keys(accs[acc]['apps']))
        for (let app of apps){
          const title = accs[acc]['apps'][app]['title']
          const rating = accs[acc]['apps'][app]['rating']
          appDetails.push({[title]: rating})
        }
        break // Only one account per user.
      }
    }

    const userDetails = {
      'userId': userId,
      'userName': userName,
      'accId': accId,
      'appDetails': appDetails
    }
    dashboard.push(userDetails)
  }
  //console.log(dashboard)
  return dashboard
}

export {dashboardData}