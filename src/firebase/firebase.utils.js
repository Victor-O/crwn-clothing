import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCr1eP_sj9bc_jhk-JaImisBX8Qp3-qe5k',
  authDomain: 'crwn-db-43078.firebaseapp.com',
  projectId: 'crwn-db-43078',
  storageBucket: 'crwn-db-43078.appspot.com',
  messagingSenderId: '490363440584',
  appId: '1:490363440584:web:5bada8a1065438411904fd',
  measurementId: 'G-NTZR8RB1NG',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

