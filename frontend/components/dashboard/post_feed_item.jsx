import React from 'react';

const PostFeedItem = (props) => {

  const isLikedByCurrentUser = () => {
    if (props.post.likes.includes(props.currentUserId)) {
      return (
        <button className="feed-item-unlike-button"
          onClick={() => props.unlike(props.post.id)}> 
          unlike
        </button>
      )
    } else {
      return (
        <button className="feed-item-like--button" 
                onClick={() => props.like(props.currentUserId, props.post.id)}>
          like
        </button>
      )
    }
  }

  return (
    <div className="feed-item">
      <div className="feed-item-avatar-image">
          <img src="https://assets.tumblr.com/images/default_avatar/octahedron_closed_64.png" 
          height="64" width="64"/>
      </div>
        <div className="feed-item-title">{props.post.title}</div>
        <div className="feed-item-body">{props.post.body}</div>
        {props.post.post_type}
      <div className="feed-item-num-likes">
        {props.post.likes.length}
      </div>
      <div className="feed-item-like-unlike-buttons">
        {isLikedByCurrentUser()}
      </div>
    </div>
  )
}

export default PostFeedItem;