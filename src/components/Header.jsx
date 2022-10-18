import * as React from 'react'
import logo from '../assets/icon.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../config/firebase';
import { motion } from 'framer-motion'
import { SettingsButton, NotificationCenter } from '../components'
function Header() {
    const [user, loading, error] = useAuthState(auth);

  return (
    <header class="bg-gray-50/80 shadow-lg">
        <div class="max-w-screen-xl px-4 py-6 mx-auto sm:px-6 lg:px-8"> 
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
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>

                        </motion.a>

                        <motion.a
                            href="/courses"
                            class="block p-2.5 text-gray-600 bg-white rounded-lg hover:text-gray-700 shrink-0 shadow-sm"
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }} 
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                            </svg>
                        </motion.a>

                        <NotificationCenter />
                        <SettingsButton />
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
                        <motion.a href="/"><motion.img whileHover={{scale:1.2}} className=' pr-4 w-24 ' src={logo}/></motion.a>
                    </div>
                    <div className='grid'>
                        <h1 class="text-sm font-bold text-gray-500">
                            Welcome to
                        </h1>
                        <p class="text-3xl font-bold sm:text-3xl text-gray-900">
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