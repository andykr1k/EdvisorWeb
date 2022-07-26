import * as React from 'react'
import photoAndy from '../assets/andy.jpg'
import photoSahara from '../assets/sahara.jpeg'

function TeamPage() {

  return (
    <div className="m-10 text-lg space-y-3 bg-slate-500 bg-opacity-5 rounded-lg shadow-lg p-3">
      <div class="grid place-items-center p-3">
          <p class="text-center text-3xl font-bold text-gray-800">
              Our Team
          </p>
          <p class="text-center mb-12 text-xl font-normal text-gray-500">
              Edvisor
          </p>
          <div class="flex items-center flex-col md:flex-row justify evenly">
              
              <div class="p-4">
                  <div class="text-center mb-4 opacity-90">
                      <a href="#" class="block relative">
                          <img alt="Andrew Krikorian" src={photoAndy}class="mx-auto object-cover rounded-full h-40 w-40 "/>
                      </a>
                  </div>
                  <div class="text-center">
                      <p class="text-2xl text-gray-800 ">
                          Andrew Krikorian
                      </p>
                      <p class="text-xl text-gray-500">
                          Co-Founder/Engineer
                      </p>
                      <p class="text-md text-gray-500 max-w-xs py-4 font-light">
                      BIO
                      </p>
                  </div>
              </div>

              <div class="p-4">
                  <div class="text-center mb-4 opacity-90">
                      <a href="#" class="block relative">
                          <img alt="Sahara Williams" src={photoSahara} class="mx-auto object-cover rounded-full h-40 w-40 "/>
                      </a>
                  </div>
                  <div class="text-center">
                      <p class="text-2xl text-gray-800 ">
                          Sahara Williams
                      </p>
                      <p class="text-xl text-gray-500 ">
                          Co-Founder
                      </p>
                      <p class="text-md text-gray-500 max-w-xs py-4 font-light">
                      BIO
                      </p>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default TeamPage