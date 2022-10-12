import { async } from '@firebase/util';
import { initializeApp } from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBWefxOldC5fQmqeTQalBWTifw-VEsLXY4",
    authDomain: "crwn-clothing-db-6e9cb.firebaseapp.com",
    projectId: "crwn-clothing-db-6e9cb",
    storageBucket: "crwn-clothing-db-6e9cb.appspot.com",
    messagingSenderId: "1045315232389",
    appId: "1:1045315232389:web:9e6449a67a73ffcf513fec"
  };

  const app = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  })

  export const auth = getAuth();

  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async(userAuth) => {
    const userDocRef = doc(db, "users", userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);
    if(!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await(setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            }))
        } catch(error) {
            console.log(`error creating the user`, error.message);
        }
    }
    return userDocRef;
  }