import * as React from 'react'
import { ProfilePicture, CourseSection, UserCharts, AddCourseForm, OffPageAdd } from '../components'
import { useAuthState } from 'react-firebase-hooks/auth';
import { SignOut, auth } from '../config/firebase';

function ProfilePage() {
  const [user, loading, error] = useAuthState(auth);

  return (
    <div className='m-5'>
      <div className='grid'>
        <div className='lg:flex rounded justify-evenly'>
          <div className='lg:grid lg:place-items-center'>
            <ProfilePicture />
          </div>
          <div className='grid place-items-center'>
            <UserCharts />
          </div>
        </div>
        <div className='m-3 place-items-start'>
          <CourseSection />
        </div>
      </div>
    </div>
  )
}




export default ProfilePage