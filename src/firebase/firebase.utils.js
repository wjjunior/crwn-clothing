import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAXfbj5ntDJOZFzyzBFhuMnKALXOc5Tk_I",
    authDomain: "crwn-dba.firebaseapp.com",
    databaseURL: "https://crwn-dba.firebaseio.com",
    projectId: "crwn-dba",
    storageBucket: "",
    messagingSenderId: "726829279297",
    appId: "1:726829279297:web:10ddfdab59ae9f66"
  }

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase