import * as React from 'react'
import Icon from '../assets/icon.png'

function AboutPage() {

  return (
    <div className="m-10 text-lg space-y-3 bg-slate-500 bg-opacity-5 rounded-lg shadow-lg p-3">
      <section>
        <div class="max-w-screen-xl p-5">
          <div class="max-w-3xl">
            <h2 class="text-3xl font-bold sm:text-4xl ">
              About Us
            </h2>
          </div>

          <div class="grid grid-cols-1 gap-8 mt-8 lg:gap-16 lg:grid-cols-2">
              <img
                src={Icon}
                alt="Edvisor Logo"
              />

            <div class="lg:py-16">
              <article class="space-y-4 text-gray-600">
                <p>
                After engaging in the tumultuous transfer process, Andrew Krikorian 
                and Sahara Williams realized that a platform to simplify the journey 
                from community college to university was long overdue. They believe 
                that every student should have their college journey at their fingertips 
                in order to stay on track and keep up with the necessities that are 
                destined to get mismanaged within our outdated transfer process. With 
                this in mind, the seamless user platform Edvisor was born.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
