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
    const completeQuery = coursesRef.where("complete", "==", true);
    const currentQuery = coursesRef.where("current", "==", true);
    const pathQuery = coursesRef.where("path", "==", true);

    const [completedCourses] = useCollectionData(completeQuery, { idField: 'abbrev' });
    const [currentCourses] = useCollectionData(currentQuery, { idField: 'abbrev' });
    const [pathCourses] = useCollectionData(pathQuery, { idField: 'abbrev' });

  return (
    <div className='grid m-auto bg-slate-500 rounded-md bg-opacity-5 p-2'>
        <div className='flex-shrink-0 overflow-x-auto max-w-screen'>
          <div className='flex justify-between m-3'>
          <h2 className='text-slate-500 text-xl md:text-3xl'>Current Courses</h2>
          <OffPageAdd />
          </div>
            
            <div className='flex flex-shrink-0 overflow-x-auto'>
                {currentCourses && currentCourses.map(course => <CourseCard gpa={course.gpa} name={course.name} abbrev={course.abbrev} units={course.units}/>)}
            </div>

            <h2 className='text-slate-500 text-xl md:text-3xl  m-3'>Completed Courses</h2>

            <div className='flex flex-shrink-0 overflow-x-auto'>
            {completedCourses && completedCourses.map(course => <CourseCard gpa={course.gpa} name={course.name} abbrev={course.abbrev} units={course.units}/>)}
            </div>

            <h2 className='text-slate-500 text-xl md:text-3xl  m-3'>Your Path</h2>

            <div className='flex flex-shrink-0 overflow-x-auto'>
            {pathCourses && pathCourses.map(course => <CourseCard gpa={course.gpa} name={course.name} abbrev={course.abbrev} units={course.units}/>)}
            </div>
        </div>
    </div>
  )
}

export default CourseSection
