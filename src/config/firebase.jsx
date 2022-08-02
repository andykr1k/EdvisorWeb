import firebase from 'firebase/compat/app';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { motion } from 'framer-motion';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { setDoc, getFirestore, doc, addDoc, collection } from 'firebase/firestore';

export const firebaseConfig = {
  apiKey: "AIzaSyCStJjbwT51Hy22xtRwzyrlX1cPI6xmWjM",
  authDomain: "edvisor-f75d2.firebaseapp.com",
  projectId: "edvisor-f75d2",
  storageBucket: "edvisor-f75d2.appspot.com",
  messagingSenderId: "674243332568",
  appId: "1:674243332568:web:58cd754c83686451dc8aad",
  measurementId: "G-70T6GHYGBF"
};

  export const app = firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  export const db = getFirestore(app);

export function SignIn() {
    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
      WriteUserData();
    }
    return (
      <motion.div whileHover={{scale: 1.2}} className='bg-black p-5 bg-opacity-10 rounded-md text-center'>
        <button className='text-white' onClick={signInWithGoogle}>Sign In With Google</button>
      </motion.div>
    )
  }
  
export function SignOut() {
    return auth.currentUser && (
      <div class='signingout'>
        <motion.div whileHover={{scale: 1.2}} className= 'bg-black p-2 bg-opacity-10 rounded-md text-center'>
            <button className='text-black' onClick={() => auth.signOut()}>Sign Out</button>
        </motion.div>
      </div>
  
    )
}

 function WriteUserData() {
  const uidUsers = "users/" + auth.currentUser.uid
  const userDocs = doc(firestore, uidUsers)
  const docData = {
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
    uid: auth.currentUser.uid
  }
  setDoc(userDocs, docData, { merge: true});
  const pathString = "users/" + auth.currentUser.uid + '/courses/'
  const user = doc(firestore, pathString)
  const doc = {
    name: "Intro to Edvisor", 
      abbrev: "INTRO100",
      units: 1.0,
      gpa: 4.0,
      current: true,
      complete: false,
      path: false
  }
  setDoc(user, doc);
}
