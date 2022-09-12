import * as React from 'react'
import { CourseCard, OffPageAdd } from '../components'
import { SignOut, auth, firestore } from '../config/firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { motion } from 'framer-motion';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


function CourseSection() {

    const pathString = "users/" + auth.currentUser.uid + '/courses'
    const coursesRef = firestore.collection(pathString);
    const currentQuery = coursesRef.where("current", "==", true);
    const [currentCourses] = useCollectionData(currentQuery, { idField: 'abbrev' });

  return (
    <div className='grid m-auto bg-slate-500 bg-opacity-5 rounded-lg shadow-lg p-2'>
        <div className='flex-shrink-0 overflow-x-auto max-w-screen'>
          <div className='flex justify-between m-3'>
          <h2 className='text-slate-500 text-xl md:text-3xl'>Current Courses</h2>
          <OffPageAdd />
          </div>
            
            <div className='flex flex-shrink-0 overflow-x-auto'>
                {currentCourses && currentCourses.map(course => <CourseCard gpa={course.gpa} name={course.name} abbrev={course.abbrev} units={course.units}/>)}
            </div>

          <CompletedSection/>
        </div>
    </div>
  )
}

function CompletedSection() {

  const pathString = "users/" + auth.currentUser.uid + '/courses'
  const coursesRef = firestore.collection(pathString);
  const completeQuery = coursesRef.where("complete", "==", true);

  const [completedCourses] = useCollectionData(completeQuery, { idField: 'abbrev' });

return (
  <>
      <div className='flex-shrink-0 overflow-x-auto max-w-screen'>

          <h2 className='text-slate-500 text-xl md:text-3xl  m-3'>Completed Courses</h2>

          <div className='flex flex-shrink-0 overflow-x-auto'>
          {completedCourses && completedCourses.map(course => <CourseCard gpa={course.gpa} name={course.name} abbrev={course.abbrev} units={course.units}/>)}
          </div>
      </div>
  </>
)
}

function PathSection() {

  const pathString = "users/" + auth.currentUser.uid + '/courses'
  const coursesRef = firestore.collection(pathString);
  const pathQuery = coursesRef.where("path", "==", true);
  const [pathCourses] = useCollectionData(pathQuery, { idField: 'abbrev' });

return (
  <>
      <div className='flex-shrink-0 overflow-x-auto max-w-screen'>
          <h2 className='text-slate-500 text-xl md:text-3xl  m-3'>Your Path</h2>

          <div className='flex flex-shrink-0 overflow-x-auto'>
          {pathCourses && pathCourses.map(course => <CourseCard gpa={course.gpa} name={course.name} abbrev={course.abbrev} units={course.units}/>)}
          </div>
      </div>
  </>
)
}

export default CourseSection
