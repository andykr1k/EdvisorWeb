import * as React from 'react'
import { CourseSection } from '../components'

function CoursePage() {

  return (
    <div className='m-10'>
      <CourseSection />
      <div class="overflow-x-auto  bg-slate-500 bg-opacity-5 rounded-lg shadow-lg mt-3 p-2">
      <h2 className='text-slate-500 text-xl md:text-3xl m-4'>All Courses</h2>
        <table class="min-w-full text-sm divide-y divide-gray-200">
          <thead>
            <tr>
              <th class="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                <div class="flex items-center">
                  Abbreviation
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-4 h-4 ml-1.5 text-gray-700"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </th>
              <th class="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                <div class="flex items-center">
                  Course Name
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-4 h-4 ml-1.5 text-gray-700"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </th>
              <th class="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                <div class="flex items-center">
                  Status
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-4 h-4 ml-1.5 text-gray-700"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </th>
              <th class="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                <div class="flex items-center">
                  GPA
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-4 h-4 ml-1.5 text-gray-700"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </th>
              <th class="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                <div class="flex items-center">
                  Units
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-4 h-4 ml-1.5 text-gray-700"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </th>
            </tr>
          </thead>

          <tbody class="divide-y divide-gray-100">
            <tr>
              
              <td class="p-4 font-medium text-gray-900 whitespace-nowrap">
                CS100
              </td>
              <td class="p-4 text-gray-700 whitespace-nowrap">Intro to Comp Sci</td>
              <td class="p-4 text-gray-700 whitespace-nowrap">
                <strong
                  class="bg-green-100 text-green-700 px-3 py-1.5 rounded text-xs font-medium"
                >
                  Completed
                </strong>
              </td>
              <td class="p-4 text-gray-700 whitespace-nowrap">3.97</td>
              <td class="p-4 text-gray-700 whitespace-nowrap">3.00</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default CoursePage
