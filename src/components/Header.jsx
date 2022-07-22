import * as React from 'react'
import logo from '../assets/icon.png'
function Header() {
    const [user] = React.useState(false);

  return (
    <header class="bg-gray-50">
        <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8"> 
            { user ? 
                <div class="flex items-center sm:justify-between sm:gap-4">
                    <div
                        class="flex items-center justify-between flex-1 gap-8 sm:justify-end"
                    >
                        <div class="flex gap-4">
                        
                        <a
                            href="/"
                            class="block p-2.5 text-gray-600 bg-white rounded-lg hover:text-gray-700 shrink-0 shadow-sm"
                        >
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            >
                            <path
                                d="M18.121,9.88l-7.832-7.836c-0.155-0.158-0.428-0.155-0.584,0L1.842,9.913c-0.262,0.263-0.073,0.705,0.292,0.705h2.069v7.042c0,0.227,0.187,0.414,0.414,0.414h3.725c0.228,0,0.414-0.188,0.414-0.414v-3.313h2.483v3.313c0,0.227,0.187,0.414,0.413,0.414h3.726c0.229,0,0.414-0.188,0.414-0.414v-7.042h2.068h0.004C18.331,10.617,18.389,10.146,18.121,9.88 M14.963,17.245h-2.896v-3.313c0-0.229-0.186-0.415-0.414-0.415H8.342c-0.228,0-0.414,0.187-0.414,0.415v3.313H5.032v-6.628h9.931V17.245z M3.133,9.79l6.864-6.868l6.867,6.868H3.133z"
                            />
                            </svg>
                        </a>

                        <a
                            href=""
                            class="block p-2.5 text-gray-600 bg-white rounded-lg hover:text-gray-700 shrink-0 shadow-sm"
                        >
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            >
                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path
                                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                            />
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                            />
                            </svg>
                        </a>

                        <a
                            href=""
                            class="block p-2.5 text-gray-600 bg-white rounded-lg hover:text-gray-700 shrink-0 shadow-sm"
                        >
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                            />
                            </svg>
                        </a>
                        </div>
                        <button
                        type="button"
                        class="flex items-center transition rounded-lg group shrink-0"
                        >
                        <a href="/profile">
                        <img
                            class="object-cover w-10 h-10 rounded-full"
                            src="https://www.hyperui.dev/photos/man-6.jpeg"
                            alt="Barry Scott"
                        />
                        </a>

                        <p class="hidden ml-2 text-xs text-left sm:block">
                            <strong class="block text-gray-500 font-medium">Barry Scott</strong>

                            <span class="text-gray-500"> barryscott@fakemail.com </span>
                        </p>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="hidden w-5 h-5 ml-4 text-gray-500 transition sm:block group-hover:text-gray-700"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                            />
                        </svg>
                        </button>
                        
                    </div>
                </div>
            :
            <div></div> 
            }

            <div class="mt-8">
            <div className='flex items-center'>
            <div class="relative">
                <img className=' pr-4 w-24 md:w-36' src={logo}/>
            </div>
            <div className='grid'>
            <h1 class="text-sm font-bold text-gray-500">
                Welcome to
            </h1>
            <p class="mt-1.5 text-3xl font-bold sm:text-3xl text-gray-900">
                Edvisor
            </p>
            </div>
            
            </div>
            
            </div>
        </div>
    </header>
  )
}

export default Header