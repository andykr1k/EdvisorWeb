import * as React from 'react'
import { motion } from 'framer-motion';
import igetcData from '../data/igetc';
function IGETCSection() {

  return (
    <div className='grid m-auto bg-slate-500 bg-opacity-5 rounded-lg shadow-lg p-2'>
        <div className='flex-shrink-0 overflow-x-auto max-w-screen'>
          <div className='grid m-3'>
            <h2 className='text-slate-500 text-xl md:text-3xl'>IGETC</h2>
            {igetcData.map((d) =>(
                <div className='grid mt-3'>
                    <div className='flex justify-between text-slate-500 text-sm md:text-lg'>
                        <h3>{d.name}</h3>
                        <h3>{d.semUnits} Semester Units or {d.courseUnits} Quarter Units</h3>
                    </div>
                    {
                        d.description 
                    ? 
                        <h4 className='text-slate-400 text-xs md:text-md mt-1'>{d.description}</h4>
                    :
                        <div></div>
                    } 
                </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default IGETCSection
