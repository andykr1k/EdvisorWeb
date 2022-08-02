import * as React from 'react'
import { auth, firestore, db } from '../config/firebase'
import { writeBatch, setDoc, collection, addDoc, doc } from 'firebase/firestore';

function AddCourseForm() {
    const courseUserPath = "users/" + auth.currentUser.uid
    const courseQueryPath = "users/" + auth.currentUser.uid + "/courses/";
    const coursesRef = firestore.collection('users').doc(auth.currentUser.uid).collection('courses');
    var [courseName, setCourseName] = React.useState('')
    var [courseAbbrev, setCourseAbbrev] = React.useState('')
    var [courseGpa, setCourseGpa] = React.useState('')
    var [courseUnits, setCourseUnits] = React.useState('')

     const WriteCourseData = async(e) => {
      e.preventDefault();
      try {
        await coursesRef.add({
          name: courseName, 
          abbrev: courseAbbrev,
          units: courseUnits,
          gpa: courseGpa,
          current: true,
          complete: false,
          path: false
        })
        console.log("Document written with ID: ");
      } catch (e) {
        console.error("Error adding document: ", e);
      }

      courseName = '';
      courseGpa = '';
      courseUnits = '';
      courseAbbrev = '';
  }

  return (
    <div className=''>
        <form className='grid' onSubmit={WriteCourseData}>
            <input className='w-full p-3 mt-1 text-sm border-2 border-gray-200 rounded' id="name" placeholder='Course Name' onChange={ (e) => setCourseName(e.target.value) }></input>
            <input className='w-full p-3 mt-1 text-sm border-2 border-gray-200 rounded' id="id" placeholder='Course ID' onChange={ (e) => setCourseAbbrev(e.target.value) }></input>
            <input className='w-full p-3 mt-1 text-sm border-2 border-gray-200 rounded' id="units" placeholder='Course Units' onChange={ (e) => setCourseUnits(e.target.value) }></input>
            <input className='w-full p-3 mt-1 text-sm border-2 border-gray-200 rounded' id="gpa" placeholder='GPA' onChange={ (e) => setCourseGpa(e.target.value) }></input>
            <button type='submit' className='w-full p-3 mt-1 text-sm border-2 border-gray-200 rounded bg-slate-300'>Submit</button>
        </form>
    </div>
  )
}


export default AddCourseForm
