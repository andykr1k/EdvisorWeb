import * as React from 'react'
import { useRef, useState } from 'react';
import { CourseCard } from '../components'
import { SignOut, auth, firestore } from '../config/firebase';
import { setDoc, getFirestore, doc, addDoc, collection } from 'firebase/firestore';
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

  return (
    <div className='grid'>
        <div className='flex-shrink-0 overflow-x-auto w-11/12'>
            <h2 className='text-slate-500 text-xl md:text-3xl m-2'>Current Courses</h2>

            <div className='flex flex-shrink-0 overflow-x-auto'>
                {currentCourses && currentCourses.map(course => <CourseCard gpa={course.gpa} name={course.name} abbrev={course.abbrev}/>)}
            </div>

            <h2 className='text-slate-500 text-xl md:text-3xl  m-2'>Completed Courses</h2>

            <div className='flex flex-shrink-0 overflow-x-auto'>
            {completedCourses && completedCourses.map(course => <CourseCard gpa={course.gpa} name={course.name} abbrev={course.abbrev}/>)}
            </div>

            <h2 className='text-slate-500 text-xl md:text-3xl  m-2'>Your Path</h2>

            <div className='flex flex-shrink-0 overflow-x-auto'>
            {pathCourses && pathCourses.map(course => <CourseCard gpa={course.gpa} name={course.name} abbrev={course.abbrev}/>)}
            </div>

        </div>
    </div>
  )
}

export default CourseSection
