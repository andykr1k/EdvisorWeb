import * as React from 'react'
import { CourseSection, AllCoursesSection, IGETCSection } from '../components'

function CoursePage() {

  return (
    <div className='m-10'>
      <CourseSection />
      <AllCoursesSection />
      <IGETCSection />
    </div>
  )
}

export default CoursePage
