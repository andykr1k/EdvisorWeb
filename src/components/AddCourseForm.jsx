import * as React from 'react'
import { auth, firestore, db } from '../config/firebase'
import { Button, Switch, useToast } from '@chakra-ui/react'

function AddCourseForm() {
    const [modalShow, setModalShow] = React.useState(false);
    const toast = useToast()

    const courseUserPath = "users/" + auth.currentUser.uid
    const courseQueryPath = "users/" + auth.currentUser.uid + "/courses/";
    const coursesRef = firestore.collection('users').doc(auth.currentUser.uid).collection('courses');
    var [courseName, setCourseName] = React.useState('')
    var [courseAbbrev, setCourseAbbrev] = React.useState('')
    var [courseGpa, setCourseGpa] = React.useState('')
    var [courseUnits, setCourseUnits] = React.useState('')
    var [completed, setCompleted] = React.useState(false)

    const WriteCourseData = async(e) => {
      e.preventDefault();
      try {
        await firestore.collection('users').doc(auth.currentUser.uid).collection('courses').doc(courseAbbrev).set({
          name: courseName, 
          abbrev: courseAbbrev,
          units: courseUnits,
          gpa: courseGpa,
          current: !completed,
          complete: completed,
          path: false
        })
        console.log("Document written with ID: " + courseAbbrev );
      } catch (e) {
        console.error("Error adding document: " + courseAbbrev, e);
      }

      courseName = '';
      courseGpa = '';
      courseUnits = '';
      courseAbbrev = '';
    }
  return (
    <div className=''>
        <form className='grid' onSubmit={WriteCourseData}>
            <input className='w-full p-3 mt-3 text-sm border-2 border-gray-200 bg-transparent rounded-md' id="name" placeholder='Course Name' onChange={ (e) => setCourseName(e.target.value) }></input>
            <input className='w-full p-3 mt-3 text-sm border-2 border-gray-200 bg-transparent rounded-md' id="id" placeholder='Course ID' onChange={ (e) => setCourseAbbrev(e.target.value) }></input>
            <input className='w-full p-3 mt-3 text-sm border-2 border-gray-200 bg-transparent rounded-md' id="units" placeholder='Course Units' onChange={ (e) => setCourseUnits(e.target.value) }></input>
            <input className='w-full p-3 mt-3 text-sm border-2 border-gray-200 bg-transparent rounded-md' id="gpa" placeholder='GPA' onChange={ (e) => setCourseGpa(e.target.value) }></input>
            <div className='flex items-center justify-between mt-3'>
              Have you completed this course?
              <Switch size='lg' onChange={ (e) => setCompleted(!completed)}/>
            </div>
            <Button type='submit' className='w-full p-3 mt-3 text-sm' colorScheme='teal' onClick={() =>
              toast({
                title: 'Course created.',
                description: "We've saved your course.",
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
            }>
              Submit
            </Button>
        </form>
    </div>
  )
}

export default AddCourseForm
