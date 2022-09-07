import React from 'react'
import './Post.css'
import Comment from '../../img/comment.png'
import Share from '../../img/share.png'
import Like from '../../img/like.png'
import NoLike from '../../img/notlike.png'

function Post({ data }) {
  return (
    <div className='Post'>
      <img src={data.img} alt="" />
      <div className="PostReactions">
        <img src={data.liked ? Like : NoLike} alt="" />
        <img src={Comment} alt="" />
        <img src={Share} alt="" />
      </div>
      <span><b>{data.likes} Likes</b></span>
      <div className="PostDetails">
        <span><b>{data.name}</b></span>
        <span> {data.caption}</span> 
      </div>
    </div>
  )
}

export default Post