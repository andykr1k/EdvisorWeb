import * as React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { SignOut, auth } from '../config/firebase';

function UserHome() {
    const [user, loading, error] = useAuthState(auth);
    const userHighResPhoto = user.photoURL.replace("s96-c", "s384-c", true);

    return (

    <div class="max-w-5xl px-4 py-8 mx-auto">
    <section class="p-8 bg-gray-100 rounded-lg">
        <div class="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
        <div class="relative">
            <div class="aspect-w-1 aspect-h-1">
            <img
                src={userHighResPhoto}
                alt=""
                class="object-cover rounded-lg"
            />
            </div>
        </div>
        <div className='grid'>
        <p class="text-xl font-medium sm:text-2xl text-gray-800">
            Welcome Back,
        </p>
        <p class="text-xl font-medium sm:text-2xl text-gray-800">
        {auth.currentUser.displayName}
        </p>
        </div>

        </div>
    </section>
    </div>
  )
}

export default UserHome
