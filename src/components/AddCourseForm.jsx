import * as React from 'react'
import { WriteCourseData } from '../config/firebase'

function AddCourseForm() {
    const [courseName, setCourseName] = React.useState('')
    const [courseAbbrev, setCourseAbbrev] = React.useState('')
    const [courseGpa, setCourseGpa] = React.useState('')
    const [courseUnits, setCourseUnits] = React.useState('')

  return (
    <div className=''>
        <form className='grid'>
            <input className='p-1 text-center rounded m-1' placeholder='Course Name' onChange={ e => setCourseName(e.target.value) }></input>
            <input className='p-1 text-center rounded m-1' placeholder='Course ID' onChange={ e => setCourseAbbrev(e.target.value) }></input>
            <input className='p-1 text-center rounded m-1' placeholder='Course Units' onChange={ e => setCourseUnits(e.target.value) }></input>
            <input className='p-1 text-center rounded m-1' placeholder='GPA' onChange={ e => setCourseGpa(e.target.value) }></input>
            <button className='p-1 text-center rounded m-1 bg-slate-300' onClick={WriteCourseData(courseName, courseAbbrev, courseGpa, courseUnits)}>Submit</button>
        </form>
    </div>
  )
}

export default AddCourseForm
