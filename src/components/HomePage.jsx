import * as React from 'react'

function HomePage() {

  return (
    <div>
        <section>
        <div class="px-4 py-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 lg:h-screen">
            <div class="relative z-10 lg:py-16">
                <div class="relative h-64 sm:h-80 lg:h-full">
                <img
                    class="absolute inset-0 object-cover w-full h-full"
                    src="https://www.hyperui.dev/photos/house-1.jpeg"
                    alt="Indoors house"
                />
                </div>
            </div>

            <div class="relative flex items-center bg-gray-100">
                <span
                class="hidden lg:inset-y-0 lg:absolute lg:w-16 lg:bg-gray-100 lg:block lg:-left-16"
                ></span>

                <div class="p-8 sm:p-16 lg:p-24">
                <h2 class="text-2xl text-gray-600 font-bold sm:text-3xl">
                    Welcome to the next generation of tools to help further higher education.
                </h2>

                <p class="mt-4 text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
                    molestiae! Quidem est esse numquam odio deleniti, beatae, magni
                    dolores provident quaerat totam eos, aperiam architecto eius quis
                    quibusdam fugiat dicta.
                </p>

                <a
                    class="inline-block px-12 py-3 mt-8 text-sm font-medium text-white bg-indigo-600 border border-indigo-600 rounded active:text-indigo-500 hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring"
                    href="/getstarted"
                >
                    Get Started
                </a>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section class="text-white">
        <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
            <div class="max-w-lg mx-auto text-center">
            <h2 class="text-3xl font-bold sm:text-4xl">Take Control of the Transfer Process!</h2>

            <p class="mt-4 text-gray-300">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
                aliquam doloribus nesciunt eos fugiat. Vitae aperiam fugit consequuntur
                saepe laborum.
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

                <h3 class="mt-4 text-xl font-bold text-white">Tailor Profile</h3>

                <p class="mt-1 text-sm text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
                possimus adipisci distinctio alias voluptatum blanditiis laudantium.
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

                <h3 class="mt-4 text-xl font-bold text-white">Create Goals</h3>

                <p class="mt-1 text-sm text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
                possimus adipisci distinctio alias voluptatum blanditiis laudantium.
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

                <h3 class="mt-4 text-xl font-bold text-white">Log Classes</h3>

                <p class="mt-1 text-sm text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
                possimus adipisci distinctio alias voluptatum blanditiis laudantium.
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

                <h3 class="mt-4 text-xl font-bold text-white">Track Progress</h3>

                <p class="mt-1 text-sm text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
                possimus adipisci distinctio alias voluptatum blanditiis laudantium.
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

                <h3 class="mt-4 text-xl font-bold text-white">Follow THE PATH</h3>

                <p class="mt-1 text-sm text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
                possimus adipisci distinctio alias voluptatum blanditiis laudantium.
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

                <h3 class="mt-4 text-xl font-bold text-white">Transfer!</h3>

                <p class="mt-1 text-sm text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
                possimus adipisci distinctio alias voluptatum blanditiis laudantium.
                </p>
            </a>
            </div>
        </div>
        </section>
    </div>
  )
}

export default HomePage