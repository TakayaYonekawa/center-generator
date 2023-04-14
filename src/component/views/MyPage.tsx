import React from 'react'
import Profile from '../templates/MyPage/Profile';
import CodeLists from '../templates/MyPage/CodeLists';

function MyPage() {
  return (
    <div className='container'>
      <Profile/>
      <CodeLists/>
    </div>
  )
}

export default MyPage;