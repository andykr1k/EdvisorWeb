import * as React from 'react'
import { ProfilePicture, AddCourseForm } from '../components'
import { useAuthState } from 'react-firebase-hooks/auth';
import {SignOut, WriteUserData, auth, WriteCourse } from '../config/firebase'

function ProfilePage() {
  const [user, loading, error] = useAuthState(auth);

  return (
    <div className=''>
      <div className='grid place-items-center'>
        <div className='flex'>
          <ProfilePicture />
          <div className='grid m-auto'>
          <WriteUserData />
          <WriteCourse />
          </div>
          <div className='m-auto p-5'>
          <AddCourseForm />
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