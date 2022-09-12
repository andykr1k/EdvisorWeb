import * as React from 'react'
import { CourseCard, OffPageAdd } from '.'
import { SignOut, auth, firestore } from '../config/firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { motion } from 'framer-motion';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


function CurrentSection() {

    const pathString = "users/" + auth.currentUser.uid + '/courses'
    const coursesRef = firestore.collection(pathString);
    const currentQuery = coursesRef.where("current", "==", true);
    const [currentCourses] = useCollectionData(currentQuery, { idField: 'abbrev' });

  return (
    <div className='grid m-auto bg-slate-500 bg-opacity-5 rounded-lg shadow-lg p-3 mt-3'>
        <div className='flex-shrink-0 overflow-x-auto max-w-screen'>
          <div className='flex justify-between m-3'>
          <h2 className='text-slate-500 text-xl font-bold md:text-3xl'>Current Courses</h2>
          <OffPageAdd />
          </div>
            
            <div className='flex flex-shrink-0 overflow-x-auto'>
                {currentCourses && currentCourses.map(course => <CourseCard gpa={course.gpa} name={course.name} abbrev={course.abbrev} units={course.units}/>)}
            </div>
        </div>
    </div>
  )
}

export default CurrentSection
