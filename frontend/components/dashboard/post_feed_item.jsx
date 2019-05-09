import React from 'react';

const PostFeedItem = (props) => {
  const likeUserIds = props.likesForThisPost.map((like) => {
    return like.user_id
  })

  const isLikedByCurrentUser = () => {
    if (likeUserIds.includes(props.currentUserId)) {
      return (
        <button className="feed-item-like-button"
                onClick={() => props.unlike(props.post.id)}> 
                <i className="icon_like red"/>
        </button>
      )
    } else {
      return (
        <button className="feed-item-like-button" 
                onClick={() => props.like(props.currentUserId, props.post.id)}>
                <i className="icon_like"/>
        </button>
      )
    }
  }

  const displayPostMedia = () => {
    if (props.post.mediaUrl) {
      return(
        <img src={props.post.mediaUrl}/> //only image (<img/> tag) display functionality for now, needs updating for other media types
      )
    }
  }

  const deletePostButton = () => {
    if (props.post.user_id === props.currentUserId) {
      return (
      	<div className="feed-item-delete-button">
          <button onClick={() => props.deletePost(props.post.id)}><i className="icon_delete"/></button>
        </div>
      )
    } else {
      return null
    }
  }

  return (
    <div className="feed-item">
      <div className="post-feed-post-owner-username">
        {props.postOwner.username}
      </div>
      <div className="feed-item-avatar-image">
          <img src={props.postOwner.profile_pic} height="64" width="64"/>
      </div>
        <div className="feed-item-title">{props.post.title}</div>
      <div className="photo-post-img">
        {displayPostMedia()}
      </div>
        <div className="feed-item-body">{props.post.body}</div>
        {/* {props.post.post_type} */}
      <div className="feed-item-num-likes">
        {props.likesForThisPost.length} notes
      </div>
      <div className="feed-item-like-unlike-buttons">
        {isLikedByCurrentUser()}
      </div>
      <div className="feed-item-reblog-button">
        <i className="icon_reblog"/>
      </div>
      
      {deletePostButton()}
    </div>
  )
}

export default PostFeedItem;