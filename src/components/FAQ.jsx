import * as React from 'react'
import logo from '../assets/icon.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../config/firebase';
import { motion } from 'framer-motion'

function FAQ() {
    const [user, loading, error] = useAuthState(auth);

  return (
    <div class="space-y-4 p-5">
        <details class="p-6 bg-slate-500 rounded-lg shadow-lg bg-opacity-5 group" open>
            <summary class="flex items-center justify-between cursor-pointer">
            <h5 class="font-medium text-gray-900">
                Lorem ipsum dolor sit amet consectetur adipisicing?
            </h5>

            <span class="relative flex-shrink-0 ml-1.5 w-5 h-5">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                class="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
                </svg>

                <svg
                xmlns="http://www.w3.org/2000/svg"
                class="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
                </svg>
            </span>
            </summary>

            <p class="mt-4 leading-relaxed text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
            molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
            voluptate dicta quo officiis explicabo consequuntur distinctio corporis
            earum similique!
            </p>
        </details>

        <details class="p-6 bg-slate-500 rounded-lg shadow-lg bg-opacity-5 group">
            <summary class="flex items-center justify-between cursor-pointer">
            <h5 class="font-medium text-gray-900">
                Lorem ipsum dolor sit amet consectetur adipisicing?
            </h5>

            <span class="relative flex-shrink-0 ml-1.5 w-5 h-5">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                class="absolute inset-0 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
                </svg>

                <svg
                xmlns="http://www.w3.org/2000/svg"
                class="absolute inset-0 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
                </svg>
            </span>
            </summary>

            <p class="mt-4 leading-relaxed text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
            molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
            voluptate dicta quo officiis explicabo consequuntur distinctio corporis
            earum similique!
            </p>
        </details>

        <details class="p-6 bg-slate-500 rounded-lg shadow-lg bg-opacity-5 group">
            <summary class="flex items-center justify-between cursor-pointer">
            <h5 class="font-medium text-gray-900">
                Lorem ipsum dolor sit amet consectetur adipisicing?
            </h5>

            <span class="relative flex-shrink-0 ml-1.5 w-5 h-5">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                class="absolute inset-0 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
                </svg>

                <svg
                xmlns="http://www.w3.org/2000/svg"
                class="absolute inset-0 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
                </svg>
            </span>
            </summary>

            <p class="mt-4 leading-relaxed text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
            molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
            voluptate dicta quo officiis explicabo consequuntur distinctio corporis
            earum similique!
            </p>
        </details>

        <details class="p-6 bg-slate-500 rounded-lg shadow-lg bg-opacity-5 group">
            <summary class="flex items-center justify-between cursor-pointer">
            <h5 class="font-medium text-gray-900">
                Lorem ipsum dolor sit amet consectetur adipisicing?
            </h5>

            <span class="relative flex-shrink-0 ml-1.5 w-5 h-5">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                class="absolute inset-0 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
                </svg>

                <svg
                xmlns="http://www.w3.org/2000/svg"
                class="absolute inset-0 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
                </svg>
            </span>
            </summary>

            <p class="mt-4 leading-relaxed text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
            molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
            voluptate dicta quo officiis explicabo consequuntur distinctio corporis
            earum similique!
            </p>
        </details>

        <details class="p-6 bg-slate-500 rounded-lg shadow-lg bg-opacity-5 group">
            <summary class="flex items-center justify-between cursor-pointer">
            <h5 class="font-medium text-gray-900">
                Lorem ipsum dolor sit amet consectetur adipisicing?
            </h5>

            <span class="relative flex-shrink-0 ml-1.5 w-5 h-5">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                class="absolute inset-0 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
                </svg>

                <svg
                xmlns="http://www.w3.org/2000/svg"
                class="absolute inset-0 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
                </svg>
            </span>
            </summary>

            <p class="mt-4 leading-relaxed text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
            molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
            voluptate dicta quo officiis explicabo consequuntur distinctio corporis
            earum similique!
            </p>
        </details>

        <details class="p-6 bg-slate-500 rounded-lg shadow-lg bg-opacity-5 group">
            <summary class="flex items-center justify-between cursor-pointer">
            <h5 class="font-medium text-gray-900">
                Lorem ipsum dolor sit amet consectetur adipisicing?
            </h5>

            <span class="relative flex-shrink-0 ml-1.5 w-5 h-5">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                class="absolute inset-0 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
                </svg>

                <svg
                xmlns="http://www.w3.org/2000/svg"
                class="absolute inset-0 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
                </svg>
            </span>
            </summary>

            <p class="mt-4 leading-relaxed text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
            molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
            voluptate dicta quo officiis explicabo consequuntur distinctio corporis
            earum similique!
            </p>
        </details>
        </div>
  )
}

export default FAQ