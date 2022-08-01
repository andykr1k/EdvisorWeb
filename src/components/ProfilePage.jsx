import * as React from 'react'
import { ProfilePicture, CourseSection } from '../components'
import { useAuthState } from 'react-firebase-hooks/auth';
import {SignOut, WriteUserData, auth } from '../config/firebase'

function ProfilePage() {
  const [user, loading, error] = useAuthState(auth);

  return (
    <div className='m-10'>
      <div className='grid place-items-start'>
        <div className=''>
            <ProfilePicture />
           {/* <div className='grid m-auto'>
            <h1 className='text-black'>Test</h1>
            <WriteUserData />
          </div>  */}
        </div>
        <div className=''>
          <CourseSection />
        </div>
          <div class="mt-4 w-1/3 m-auto p-5">
            <SignOut />
          </div>
      </div>
    </div>
  )
}

export default ProfilePage