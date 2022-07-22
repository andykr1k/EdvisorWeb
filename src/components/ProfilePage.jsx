import * as React from 'react'
import { ProfilePicture } from '../components'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../config/firebase';
import {SignOut} from '../config/firebase'

function ProfilePage() {
  const [user, loading, error] = useAuthState(auth);

  return (
    <div className=''>
      <div className='grid place-items-center bg-gray-200'>
        <div className='flex'>
          <ProfilePicture />
        </div>
          <div class="mt-4 w-1/3 m-auto p-5">
            <SignOut />
          </div>
      </div>
    </div>
  )
}

export default ProfilePage