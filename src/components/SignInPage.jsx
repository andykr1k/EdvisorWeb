import * as React from 'react'
import head from '../assets/head.png'
import {SignIn} from '../config/firebase'

function SignInPage() {

  return (
    <section class="relative flex flex-wrap lg:h-screen lg:items-center bg-gray-200">
    <div class="relative w-full h-64 sm:h-96 lg:w-1/2 lg:h-full">
        <img
        class="absolute inset-0 object-fit w-full h-full"
        src={head}
        alt=""
        />
    </div>
    
    <div class="w-full px-4 py-12 lg:w-1/2 sm:px-6 lg:px-8 sm:py-16 lg:py-24">
        <div class="max-w-lg mx-auto text-center">
        <h1 class="text-2xl font-bold text-gray-800 sm:text-3xl">Get started today!</h1>

        <p class="mt-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla
            eaque error neque ipsa culpa autem, at itaque nostrum!
        </p>
        </div>
        <SignIn />
    </div>
    </section>
  )
}

export default SignInPage