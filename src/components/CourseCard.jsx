import * as React from 'react'

function CourseCard() {

  return (
    <div className='sm:w-1/5 m-2 flex-shrink-0'>
        <a class="relative block p-8 border border-gray-100 shadow-md rounded-xl" href="">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="grey"
                stroke-width="2"
                >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
            </svg>
        <span class="absolute right-4 top-4 rounded-full px-3 py-1.5 bg-green-100 text-green-600 font-medium text-xs">
            Test GPA
        </span>

        <div class="mt-4 text-gray-500 sm:pr-8">

            <h5 class="mt-4 text-xl font-bold text-gray-900">Test Course Name</h5>

            <p class="mt-2 text-sm ">
            Test Course Abbrev.
            </p>
        </div>
        </a>
    </div>
  )
}

export default CourseCard

