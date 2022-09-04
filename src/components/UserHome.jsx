import * as React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { SignOut, auth } from '../config/firebase';

function UserHome() {
    const [user, loading, error] = useAuthState(auth);
    const userHighResPhoto = user.photoURL.replace("s96-c", "s384-c", true);

    return (

    <div class="max-w-xl px-4 py-8 mx-auto">
    <section class="p-8 bg-slate-500 bg-opacity-5 rounded-lg shadow-lg">
        <div class="grid place-items-center">
            <div className='grid place-items-center'>
                <p class="text-2xl text-gray-800">
                    Welcome Back
                </p>
                <p class="font-medium text-4xl text-gray-800">
                {auth.currentUser.displayName}
                </p>
            </div>

        </div>
    </section>
    </div>
  )
}

export default UserHome
