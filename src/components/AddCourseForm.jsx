import * as React from 'react'
import { WriteCourseData } from '../config/firebase'

function AddCourseForm() {
    var [courseName, setCourseName] = React.useState('')
    var [courseAbbrev, setCourseAbbrev] = React.useState('')
    var [courseGpa, setCourseGpa] = React.useState('')
    var [courseUnits, setCourseUnits] = React.useState('')
    var [courseComplete, setCourseComplete] = React.useState('')
    var [courseCurrent, setCourseCurrent] = React.useState('')
  return (
    <div className=''>
        <form className='grid' onSubmit={WriteCourseData(courseName, courseAbbrev, courseGpa, courseUnits, courseCurrent, courseComplete, "false")}>
            <input className='w-full p-3 mt-1 text-sm border-2 border-gray-200 rounded' id="name" placeholder='Course Name' onChange={ (e) => setCourseName(e.target.value) }></input>
            <input className='w-full p-3 mt-1 text-sm border-2 border-gray-200 rounded' id="id" placeholder='Course ID' onChange={ (e) => setCourseAbbrev(e.target.value) }></input>
            <input className='w-full p-3 mt-1 text-sm border-2 border-gray-200 rounded' id="units" placeholder='Course Units' onChange={ (e) => setCourseUnits(e.target.value) }></input>
            <input className='w-full p-3 mt-1 text-sm border-2 border-gray-200 rounded' id="gpa" placeholder='GPA' onChange={ (e) => setCourseGpa(e.target.value) }></input>
            <input className='w-full p-3 mt-1 text-sm border-2 border-gray-200 rounded' id="current" placeholder='current(True/False)' onChange={ (e) => setCourseCurrent(e.target.value) }></input>
            <input className='w-full p-3 mt-1 text-sm border-2 border-gray-200 rounded' id="complete" placeholder='complete(True/False)' onChange={ (e) => setCourseComplete(e.target.value) }></input>
            <button className='w-full p-3 mt-1 text-sm border-2 border-gray-200 rounded bg-slate-300' type='submit'>Submit</button>
        </form>
    </div>
  )
}


export default AddCourseForm
