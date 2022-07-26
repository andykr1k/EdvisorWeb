import firebase from 'firebase/compat/app';
import { motion } from 'framer-motion';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import googleLogo from '../assets/google_logo.png'
import { setDoc, getFirestore, doc } from 'firebase/firestore';

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
    }
    return (
      <div className=''>
        <motion.button       
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }} 
        className='bg-slate-500 rounded-lg shadow-lg p-3 text-center text-white flex items-center justify-center' 
        onClick={signInWithGoogle}
        >
        <img src={googleLogo} className='w-1/6 mr-2'/>
        <h4 className=' font-semibold text-md md:text-lg'>Sign In With Google</h4>
        </motion.button>
      </div>
    )
  }
  
export function SignOut() {
    return auth.currentUser && (
      <div class='signingout'>
        <motion.button       
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }} 
        className='bg-slate-500 rounded-lg shadow-lg p-3 text-center text-white' 
        onClick={() => auth.signOut()}
        >
              Sign Out
        </motion.button>
      </div>
  
    )
}

 export function WriteUserData() {
  const uidUsers = "users/" + auth.currentUser.uid
  const userDocs = doc(firestore, uidUsers)
  const docData = {
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
    uid: auth.currentUser.uid
  }
  setDoc(userDocs, docData, { merge: true });
}
