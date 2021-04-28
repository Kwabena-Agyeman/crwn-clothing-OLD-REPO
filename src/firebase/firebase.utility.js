import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAN8YwZY2r3k9pgIfENurO1sxUKnt-BrBA',
  authDomain: 'crwn-clothing-db-c0c94.firebaseapp.com',
  projectId: 'crwn-clothing-db-c0c94',
  storageBucket: 'crwn-clothing-db-c0c94.appspot.com',
  messagingSenderId: '707546973288',
  appId: '1:707546973288:web:458b4266a2f2773b35a7dd',
  measurementId: 'G-5EBHK05N8N',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

// export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export default firebase;
