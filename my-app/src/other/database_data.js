const dashboardData = (data) => {

  //console.log('dashboardData...')
  const accs = data['accounts']
  const users = data['users']
  let dashboard = []

  for (let user in users){

    const userId = user
    const accId = users[user]['account']
    const userName = users[user]['name']
    let appDetails = []

    for (let acc in accs){
      if (acc === accId){
        const apps = (Object.keys(accs[acc]['apps']))
        for (let app of apps){
          const rating = accs[acc]['apps'][app]['rating']
          const title = accs[acc]['apps'][app]['title']
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