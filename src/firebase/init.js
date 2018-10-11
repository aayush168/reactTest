import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyD7vqdLfGNEViVsFhb61ceYGO4BGsm8b9c",
  authDomain: "reacttest-187f1.firebaseapp.com",
  databaseURL: "https://reacttest-187f1.firebaseio.com",
  projectId: "reacttest-187f1",
  storageBucket: "reacttest-187f1.appspot.com",
  messagingSenderId: "959401504418"
}

firebase.initializeApp(config);

export default firebase;