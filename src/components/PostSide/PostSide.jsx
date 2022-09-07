import React from 'react'
import Posts from '../Posts/Posts'
import SharePost from '../SharePost/SharePost'
import './PostSide.css'

function PostSide() {
  return (
    <div className='PostSide'>
        <SharePost />
        <Posts />
    </div>
  )
}

export default PostSide