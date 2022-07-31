import * as React from 'react'
import { ProfilePicture, AddCourseForm, CourseSection } from '../components'
import { useAuthState } from 'react-firebase-hooks/auth';
import {SignOut, WriteUserData, auth } from '../config/firebase'

function ProfilePage() {
  const [user, loading, error] = useAuthState(auth);
  const [addCourse, setaddCourse] = React.useState(false)
  return (
    <div className=''>
      <div className='grid place-items-center'>
        <div className='md:flex'>
            <ProfilePicture />
           {/* <div className='grid m-auto'>
            <h1 className='text-black'>Test</h1>
            <WriteUserData />
          </div>  */}
          <div className='m-auto p-5'>
            { addCourse ? 
            <div className='grid place-items-center'>
              <AddCourseForm />
              <button class="p-2 text-white bg-blue-600 rounded-full" type="button" onClick={() => setaddCourse(!addCourse)}>
                <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 12h6m-6 0H6" />
                </svg>
              </button>
            </div>
            :
            <div className='grid place-items-center'>
              <button class="p-2 text-white bg-blue-600 rounded-full" type="button" onClick={() => setaddCourse(!addCourse)}>
                <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </button>
            </div>
            }
          </div>

        </div>
        <div className='m-auto'>
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