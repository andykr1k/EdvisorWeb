import * as React from 'react'
import { ProfilePicture, AddCourseForm, CourseSection } from '../components'
import { useAuthState } from 'react-firebase-hooks/auth';
import {SignOut, WriteUserData, auth, WriteCourse } from '../config/firebase'

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
            <WriteCourse />
          </div> 
          <div className='m-auto p-5'>
            { addCourse ? 
            <div className='grid place-items-center'>
              <AddCourseForm />
              <button className='bg-black bg-opacity-5 p-5 rounded-full' onClick={() => setaddCourse(!addCourse)} >Close</button>
            </div>
            :
            <div className='grid place-items-center'>
              <button className='bg-black bg-opacity-5 p-5 rounded-full' onClick={() => setaddCourse(!addCourse)} >Add Course</button>
            </div>
            }
          </div>*/}

        </div>
        <div>
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