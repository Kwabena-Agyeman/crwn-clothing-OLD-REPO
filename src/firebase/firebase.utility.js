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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  } else {
    const userRef = await firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData,
        });
      } catch (error) {
        console.log(error.message, 'error creating user');
      }
    }
    return userRef;
  }
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// GOOGLE SIGNIN FUNCTIONALITY
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export default firebase;
