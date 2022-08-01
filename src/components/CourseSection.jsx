import * as React from 'react'
import { useRef, useState } from 'react';
import { CourseCard } from '../components'
import { SignOut, auth, firestore } from '../config/firebase';
import { setDoc, getFirestore, doc, addDoc, collection } from 'firebase/firestore';
import { AddCourseForm } from '../components'
import firebase from 'firebase/compat/app';
import { useAuthState } from 'react-firebase-hooks/auth';
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
    const [addCourse, setaddCourse] = React.useState(false)

  return (
    <div className='grid m-auto'>
        <div className='flex-shrink-0 overflow-x-auto max-w-screen'>
          <div className='flex justify-between'>
          <h2 className='text-slate-500 text-xl md:text-3xl m-2'>Current Courses</h2>
          </div>
            
            <div className='flex flex-shrink-0 overflow-x-auto'>
                {currentCourses && currentCourses.map(course => <CourseCard gpa={course.gpa} name={course.name} abbrev={course.abbrev} units={course.units}/>)}
            </div>

            <h2 className='text-slate-500 text-xl md:text-3xl  m-2'>Completed Courses</h2>

            <div className='flex flex-shrink-0 overflow-x-auto'>
            {completedCourses && completedCourses.map(course => <CourseCard gpa={course.gpa} name={course.name} abbrev={course.abbrev} units={course.units}/>)}
            </div>

            <h2 className='text-slate-500 text-xl md:text-3xl  m-2'>Your Path</h2>

            <div className='flex flex-shrink-0 overflow-x-auto'>
            {pathCourses && pathCourses.map(course => <CourseCard gpa={course.gpa} name={course.name} abbrev={course.abbrev} units={course.units}/>)}
            </div>

            <div className='m-auto'>
              { addCourse ? 
              <div className='grid'>
                <AddCourseForm />
                <button class="p-2 text-white bg-blue-600 rounded-full" type="button" onClick={() => setaddCourse(!addCourse)}>
                  <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 12h6m-6 0H6" />
                  </svg>
                </button>
              </div>
              :
              <div className='grid'>
                <button class="p-2 text-white bg-blue-600 rounded-full" type="button" onClick={() => setaddCourse(!addCourse)}>
                  <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </button>
              </div>
              }
            </div>
        </div>
    </div>
  )
}

export default CourseSection
