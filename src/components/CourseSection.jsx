import * as React from 'react'
import { CourseCard } from '../components'

function CourseSection() {

  return (
    <div className='grid place-items-center'>
        <div className='flex-shrink-0 overflow-x-auto w-10/12'>
            <h2 className='text-slate-500 text-xl md:text-3xl m-2'>Current Courses</h2>

            <div className='flex overflow-x-auto'>
                <CourseCard />
                <CourseCard />
                <CourseCard />
            </div>

            <h2 className='text-slate-500 text-xl md:text-3xl  m-2'>Completed Courses</h2>

            <div className='flex flex-shrink-0 overflow-x-auto'>
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
            </div>

            <h2 className='text-slate-500 text-xl md:text-3xl  m-2'>Your Path</h2>

            <div className='flex flex-shrink-0 overflow-x-auto'>
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
            </div>

        </div>
    </div>
  )
}

export default CourseSection
