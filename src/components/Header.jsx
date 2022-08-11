import * as React from 'react'
import logo from '../assets/icon.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../config/firebase';
import { motion } from 'framer-motion'
import { SettingsModal } from '../components'
function Header() {
    const [user, loading, error] = useAuthState(auth);

  return (
    <header class="bg-gray-50/90 shadow-lg">
        <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8"> 
            { user ? 
                <div class="flex items-center ">
                    <div class="flex items-center justify-between flex-1 gap-8 ">
                        <div class="flex gap-4">
                        <motion.a
                            href="/"
                            class="block p-2.5 text-gray-600 bg-white rounded-lg hover:text-gray-700 shrink-0 shadow-sm"
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }} 
                        >
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-5 h-5 ml-1 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="1"
                            >
                            <path
                                d="M18.121,9.88l-7.832-7.836c-0.155-0.158-0.428-0.155-0.584,0L1.842,9.913c-0.262,0.263-0.073,0.705,0.292,0.705h2.069v7.042c0,0.227,0.187,0.414,0.414,0.414h3.725c0.228,0,0.414-0.188,0.414-0.414v-3.313h2.483v3.313c0,0.227,0.187,0.414,0.413,0.414h3.726c0.229,0,0.414-0.188,0.414-0.414v-7.042h2.068h0.004C18.331,10.617,18.389,10.146,18.121,9.88 M14.963,17.245h-2.896v-3.313c0-0.229-0.186-0.415-0.414-0.415H8.342c-0.228,0-0.414,0.187-0.414,0.415v3.313H5.032v-6.628h9.931V17.245z M3.133,9.79l6.864-6.868l6.867,6.868H3.133z"
                            />
                            </svg>
                        </motion.a>

                        <motion.a
                            href="/courses"
                            class="block p-2.5 text-gray-600 bg-white rounded-lg hover:text-gray-700 shrink-0 shadow-sm"
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }} 
                        >
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="1.5"
                            >
                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path
                                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                            />
                            </svg>
                        </motion.a>

                        <motion.a
                            href="/notifications"
                            class="block p-2.5 text-gray-600 bg-white rounded-lg hover:text-gray-700 shrink-0 shadow-sm"
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }} 
                        >
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="1.8"
                            >
                            <path
                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                            />
                            </svg>
                        </motion.a>
                        <SettingsModal />
                        </div>

                        <button
                        type="button"
                        class="flex items-center transition rounded-lg group shrink-0 "
                        >
                        <a href="/profile" class=" rounded-full shadow-md">
                        <motion.img
                            class="object-cover w-10 h-10 rounded-full"
                            src={user.photoURL}
                            whileHover={{ scale: 1.2 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        />
                        </a>

                        <p class="hidden ml-2 text-xs text-left sm:block">
                            <strong class="block text-gray-500 font-medium">{user.displayName}</strong>

                            <span class="text-gray-500"> {user.email} </span>
                        </p>

                        </button>
                        
                    </div>
                </div>
            :
            <div></div> 
            }
            { user ?
            <div></div>
            :
            <div className="">
                <div className='flex items-center'>
                    <div class="relative">
                        <motion.a href="/"><motion.img whileHover={{scale:1.2}} className=' pr-4 md:w-24' src={logo}/></motion.a>
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
            }
        </div>
    </header>
  )
}

export default Header