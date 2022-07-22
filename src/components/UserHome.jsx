import * as React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { SignOut, auth } from '../config/firebase';

function UserHome() {
    const [user, loading, error] = useAuthState(auth);
    return (
    <div className=''>
        <h2>
            Welcome Back
        </h2>
        <h1>
            {auth.currentUser.displayName}
        </h1>
        <SignOut />
    </div>
  )
}

export default UserHome
