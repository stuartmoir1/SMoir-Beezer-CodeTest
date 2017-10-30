import firebase from 'firebase'
//console.log('firebase...')
var config = {
  apiKey: "AIzaSyAI2JNsY61r7v2Z9xh2EJqnSUHL7cFAi2s",
  authDomain: "smoir-beezer-code-test.firebaseapp.com",
  databaseURL: "https://smoir-beezer-code-test.firebaseio.com",
  projectId: "smoir-beezer-code-test",
  storageBucket: "smoir-beezer-code-test.appspot.com",
  messagingSenderId: "249648350632"
}
var fire = firebase.initializeApp(config)

export default fire