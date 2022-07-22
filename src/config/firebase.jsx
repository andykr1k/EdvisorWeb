import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { motion } from 'framer-motion';

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

export function SignIn() {
    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
      console.log(auth);
    }
    return (
      <motion.div whileHover={{scale: 1.2}} className='bg-black m-2 p-5 bg-opacity-10 rounded-md'>
        <button className='text-white' onClick={signInWithGoogle}>Sign In With Google</button>
      </motion.div>
    )
  }
  
export function SignOut() {
    return auth.currentUser && (
      <div class='signingout'>
        <motion.div whileHover={{scale: 1.2}} className='absolute top-10 left-0 bg-black m-5 mt-7 p-2 bg-opacity-10 rounded-md'>
            <img className='text-white' src={logoutLogo} onClick={() => auth.signOut()}/>
        </motion.div>
      </div>
  
    )
}