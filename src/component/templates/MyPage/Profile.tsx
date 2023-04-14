import React from 'react'
import { Image } from 'react-bootstrap'
import { auth } from '../../../firebase'

function Profile() {
  return (
    <div className="d-flex gap-3 align-items-center justify-content-center ">
      <div>
        <Image src={auth.currentUser?.photoURL || ""} roundedCircle />
      </div>

      <h2>{auth.currentUser?.displayName }さん</h2>
    </div>
  )
}

export default Profile