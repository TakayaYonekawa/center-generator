import React from 'react'
import { Image } from 'react-bootstrap'

function Profile() {
  return (
    <div className="d-flex gap-3 align-items-center justify-content-center ">
      <div>
        <Image src="holder.js/171x180" roundedCircle />
      </div>

      <h2>name</h2>
    </div>
  )
}

export default Profile