import * as React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../config/firebase';

function ProfilePicture() {
    const [user, loading, error] = useAuthState(auth);
    const userHighResPhoto = user.photoURL.replace("s96-c", "s384-c", true);
    return (
    <div>
        <a class="relative block bg-black rounded-lg group" href="">
        <img
            class="absolute inset-0 object-cover w-full rounded-lg h-full transition-opacity opacity-75  group-hover:opacity-50"
            src={userHighResPhoto}
            alt=""
        />
        <div class="relative p-8">
            <p class="text-sm font-medium tracking-widest text-pink-500 uppercase">
            Computer Science Major
            </p>

            <p class="text-2xl font-bold text-white">{user.displayName}</p>

            <div class="mt-64">
            <div
                class="transition-all transform translate-y-8 opacity-0  group-hover:opacity-100 group-hover:translate-y-0"
            >
                <p class="text-sm text-white">
                Target Schools: UCLA, UCSD, UCB, MIT
                </p>
            </div>
            </div>
        </div>
        </a>
    </div>
  )
}

export default ProfilePicture
