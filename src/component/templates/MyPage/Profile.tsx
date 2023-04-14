import React from 'react'
import { Image } from 'react-bootstrap'
import { auth, useAuth } from '../../../firebase'

function Profile() {
  const userProfile = useAuth();

  return (
    <div className="d-flex gap-3 align-items-center justify-content-center ">
      <div>
        <Image src={userProfile?.photoURL || ""} roundedCircle />
      </div>

      <h2>{userProfile?.displayName }さん</h2>
    </div>
  )
  
}

export default Profile