import * as React from 'react'
import { SignOut, auth } from '../config/firebase';

function SettingsPage() {

  return (
    <div>
        <div className="grid place-items-center">
            <SignOut />
        </div>
    </div>
  )
}

export default SettingsPage
