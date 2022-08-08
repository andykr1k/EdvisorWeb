import * as React from 'react'
import { AddCourseForm } from '../components'

function AddPage() {

  return (
    <div className="grid m-10 rounded place-items-center">
        <div className='w-3/4'>
            <AddCourseForm />
        </div>
    </div>
  )
}

export default AddPage;
