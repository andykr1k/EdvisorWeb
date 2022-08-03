import * as React from 'react'
import { ProfilePicture, CourseSection, UserCharts } from '../components'
import { useAuthState } from 'react-firebase-hooks/auth';
import {SignOut, auth } from '../config/firebase'

function ProfilePage() {
  const [user, loading, error] = useAuthState(auth);

  return (
    <div className='m-10'>
      <div className='grid'>
        <div className='sm:flex rounded bg-slate-900 bg-opacity-5 sm:justify-between min-h-full'>
          <div className='sm:grid sm:place-items-center'>
            <ProfilePicture />
          </div>
              <UserCharts />
        </div>
        <div className='mt-5 place-items-start'>
          <CourseSection />
        </div>
          <div class="mt-4 w-1/2 sm:w-1/3 m-auto p-5">
            <SignOut />
          </div>
      </div>
    </div>
  )
}

export default ProfilePage