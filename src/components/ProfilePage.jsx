import * as React from 'react'
import { ProfilePicture, CourseSection } from '../components'
import { useAuthState } from 'react-firebase-hooks/auth';
import {SignOut, auth } from '../config/firebase'

function ProfilePage() {
  const [user, loading, error] = useAuthState(auth);

  return (
    <div className='m-10'>
      <div className='grid place-items-start'>
      <div className='sm:flex'>
      <div className=''>
            <ProfilePicture />
        </div>
        <div className='sm:p-5'>
          <CourseSection />
        </div>
      </div>
          <div class="mt-4 w-1/3 m-auto p-5">
            <SignOut />
          </div>
      </div>
    </div>
  )
}

export default ProfilePage