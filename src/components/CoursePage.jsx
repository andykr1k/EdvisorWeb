import * as React from 'react'
import { CurrentSection, AllCoursesSection, IGETCSection, CompletedSection, PathSection } from '../components'

function CoursePage() {

  return (
    <div className='m-10'>
      <CurrentSection />
      <CompletedSection />
      <PathSection />
      <AllCoursesSection />
      <IGETCSection />
    </div>
  )
}

export default CoursePage
