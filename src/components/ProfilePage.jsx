import * as React from 'react'
import { ProfilePicture } from '../components'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../config/firebase';

function ProfilePage() {
  const [user, loading, error] = useAuthState(auth);

  return (
    <div>
      <div className='grid place-items-center bg-gray-200'>
            <ProfilePicture />
      </div>
    </div>
  )
}

export default ProfilePage