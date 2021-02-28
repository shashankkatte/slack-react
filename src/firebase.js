import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDIW-mlVMym0funfNns6J5koDuLsWuH5HE',
  authDomain: 'slack-react-f2766.firebaseapp.com',
  projectId: 'slack-react-f2766',
  storageBucket: 'slack-react-f2766.appspot.com',
  messagingSenderId: '1039148946113',
  appId: '1:1039148946113:web:2a1d3ed38a2364bb88ba40',
  measurementId: 'G-5G9EHEC2EM',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
