import * as React from 'react'
import { ProfilePicture } from '../components'
function ProfilePage() {

  return (
    <div>
        <div className='grid place-items-center bg-gray-200'>
            <ProfilePicture />
        </div>
    </div>
  )
}

export default ProfilePage