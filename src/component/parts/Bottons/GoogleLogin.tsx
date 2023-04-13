import React from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { signInWithGoogle } from '../../../redux/firebase/authSlice';

function GoogleLogin() {
    const dispatch = useDispatch();

  return (
    <Button
    variant="primary"
    onClick={() => {
      dispatch(signInWithGoogle());
    }}
  >
    Googleでログイン
  </Button>
  )
}

export default GoogleLogin