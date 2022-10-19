import * as React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../config/firebase';
import { ProfilePicture } from './index'
function UserHome() {
    const [user, loading, error] = useAuthState(auth);

    return (
    <div class="max-w-xl px-4 py-8 mx-auto">
    <section class="p-8 bg-slate-500 bg-opacity-5 rounded-lg shadow-lg">
        <div class="grid place-items-center">
            <div className='grid place-items-center'>
                <ProfilePicture />
            </div>
        </div>
    </section>
    </div>
  )
}

export default UserHome
