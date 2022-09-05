import * as React from 'react'
import { SignOut, auth } from '../config/firebase';

function SettingsModal() {

  return (
    <div className="m-2">
    <div class="flow-root">
      <nav class="flex flex-col -my-2 divide-y divide-gray-100">
        <ul class="py-2">
          <li>
            <a
              href=""
              class="block px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
            >
              Light Mode
            </a>
          </li>

        </ul>

        <ul class="py-2">

          <li>
            <a
              href="/contact"
              class="block px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
            >
              Help
            </a>
          </li>

          <li>
            <a
              href=""
              class="block px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
            >
              Account Settings
            </a>
          </li>
        </ul>
        <ul class="py-2">
        </ul>
      </nav>
      <div className="grid place-items-center">
          <SignOut />
        </div>
    </div>

        
    </div>
  )
}

export default SettingsModal
