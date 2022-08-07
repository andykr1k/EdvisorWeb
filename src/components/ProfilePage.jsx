import * as React from 'react'
import { ProfilePicture, CourseSection, UserCharts, AddCourseForm, OffCanvasExample } from '../components'
import { useAuthState } from 'react-firebase-hooks/auth';
import { SignOut, auth } from '../config/firebase';

function ProfilePage() {
  const [user, loading, error] = useAuthState(auth);

  return (
    <div className='m-5'>
      <div className='grid'>
        <div className='sm:flex rounded justify-evenly'>
          <div className='sm:grid sm:place-items-center'>
            <ProfilePicture />
          </div>
          <div className='grid place-items-center'>
            <UserCharts />
          </div>
        </div>
        <div className='mt-1 place-items-start'>
          <CourseSection />
        </div>
        <div className='m-auto place-items-center'>
          <OffCanvasExample />
        </div>
          <div class="m-auto mt-3 place-items-center">
            <SignOut />
          </div>
      </div>
    </div>
  )
}




export default ProfilePage