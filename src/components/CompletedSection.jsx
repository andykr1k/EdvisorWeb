import * as React from 'react'
import { CourseCard, OffPageAdd } from '.'
import { SignOut, auth, firestore } from '../config/firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { motion } from 'framer-motion';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

function CompletedSection() {

  const pathString = "users/" + auth.currentUser.uid + '/courses'
  const coursesRef = firestore.collection(pathString);
  const completeQuery = coursesRef.where("complete", "==", true);

  const [completedCourses] = useCollectionData(completeQuery, { idField: 'abbrev' });

return (
  <div className='grid m-auto bg-slate-500 bg-opacity-5 rounded-lg shadow-lg p-3 mt-3'>
      <div className='flex-shrink-0 overflow-x-auto max-w-screen'>

          <h2 className='text-slate-500 text-xl font-bold md:text-3xl  m-3'>Completed Courses</h2>

          <div className='flex flex-shrink-0 overflow-x-auto'>
          {completedCourses && completedCourses.map(course => <CourseCard gpa={course.gpa} name={course.name} abbrev={course.abbrev} units={course.units}/>)}
          </div>
      </div>
  </div>
)
}


export default CompletedSection