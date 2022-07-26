import * as React from 'react'
import front from '../assets/front.png'
import head from '../assets/head.png'
import { motion } from 'framer-motion'
import { Highlight, Heading } from '@chakra-ui/react'

function HomePage() {

  return (
    <div>
        <motion.section className='' initial={{ x: '-100vw'}} animate={{x: 0}}>
        <div class="px-4 py-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 lg:h-screen">
            <div class="relative z-10 lg:py-16">
                <div class="relative h-64 sm:h-80 lg:h-full">
                <img
                    class="absolute inset-0 object-cover w-full h-full rounded"
                    src={front}
                    alt="Indoors house"
                />
                </div>
            </div>

            <div class="relative flex items-center bg-gray-600 rounded">
                <span
                class="hidden lg:inset-y-0 lg:absolute lg:w-16 lg:block lg:-left-16"
                ></span>

                <div class="p-8 sm:p-16 lg:p-24">
                <Heading lineHeight='tall' class="text-2xl text-white font-bold sm:text-3xl" >
                    <Highlight
                        query='generation'
                        styles={{ px: '0', py: '0.5', rounded: 'md', bg: 'gray.200' }}
                    >
                    Welcome to the next generation of tools to help further higher education.
                    </Highlight>
                </Heading>
                <p class="mt-4 text-gray-200">
                    Simplify your college transfer and graduation process by centralizing all your information while being able to view progress in realtime!
                </p>

                <a
                    class="inline-block px-12 py-3 mt-8 text-sm font-medium text-white bg-indigo-600 border border-indigo-600 rounded active:text-indigo-500 hover:bg-transparent hover:text-white focus:outline-none focus:ring"
                    href="/profile"
                >
                    Get Started
                </a>
                </div>
            </div>
            </div>
        </div>
        </motion.section>
        <aside
        class="overflow-hidden bg-[url(/src/assets/head.png)] bg-top bg-no-repeat bg-cover"
        >
        <div class="p-8 md:p-12 lg:px-16 lg:py-24 bg-gradient-to-r from-black/75 via-gray-900/75 to-gray-700/75">
            <div class="max-w-lg text-center sm:text-left">
            <h2 class="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
                Follow your path!
            </h2>

            <p
                class="hidden max-w-md text-white/90 md:mt-6 md:text-lg md:leading-relaxed md:block"
            >
                Artificial intelligence that streamlines your college application process.
            </p>
            </div>
        </div>
        </aside>
        <section class="text-white bg-gray-100">
        <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
            <div class="max-w-lg mx-auto text-center">
            <h2 class="text-3xl font-bold text-gray-600 sm:text-4xl">Take Control of the Transfer Process!</h2>

            <p class="mt-4 text-gray-600">
            Our solutions help students who are transferring from community college optimize their course path, allowing them to track all course information and progress, all while creating a fun and interactive process.
            </p>
            </div>

            <div class="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
            <a
                class="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-pink-500/10 hover:border-pink-500/10"
                href="/"
            >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-10 h-10 text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
                </svg>

                <h3 class="mt-4 text-xl font-bold text-gray-600">Tailor Profile</h3>

                <p class="mt-1 text-sm text-gray-500">
                Quickly log in and edit any details to better fit your profile.
                </p>
            </a>

            <a
                class="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-pink-500/10 hover:border-pink-500/10"
                href="/"
            >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-10 h-10 text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
                </svg>

                <h3 class="mt-4 text-xl font-bold text-gray-600">Create Goals</h3>

                <p class="mt-1 text-sm text-gray-500">
                Our tools will intuitively create goals based off the majors and target colleges selected.
                </p>
            </a>

            <a
                class="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-pink-500/10 hover:border-pink-500/10"
                href="/"
            >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-10 h-10 text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
                </svg>

                <h3 class="mt-4 text-xl font-bold text-gray-600">Log Classes</h3>

                <p class="mt-1 text-sm text-gray-500">
                After perfecting your profile, you can track your classes and overall progress in real time!
                </p>
            </a>

            <a
                class="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-pink-500/10 hover:border-pink-500/10"
                href="/"
            >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-10 h-10 text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
                </svg>

                <h3 class="mt-4 text-xl font-bold text-gray-600">Track Progress</h3>

                <p class="mt-1 text-sm text-gray-500">
                All progress is tracked in real time, including overall gpa and acceptance percentage.
                </p>
            </a>

            <a
                class="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-pink-500/10 hover:border-pink-500/10"
                href="/"
            >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-10 h-10 text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
                </svg>

                <h3 class="mt-4 text-xl font-bold text-gray-600">Follow the Path</h3>

                <p class="mt-1 text-sm text-gray-500">
                Our AI weighs all possible routes and calculates the highest probable route to complete your goals.
                </p>
            </a>

            <a
                class="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-pink-500/10 hover:border-pink-500/10"
                href="/"
            >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-10 h-10 text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
                </svg>

                <h3 class="mt-4 text-xl font-bold text-gray-600">Transfer!</h3>

                <p class="mt-1 text-sm text-gray-500">
                Once you've completed all the steps, you have completed all the steps to maximize your potential in college acceptances.
                </p>
            </a>
            </div>
        </div>
        </section>
        
    </div>
  )
}

export default HomePage