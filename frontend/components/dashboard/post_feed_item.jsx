import React from 'react';

const PostFeedItem = (props) => {
  // console.log(props.post)
  // let postLikes = props.post.likes.map( like => {
  //   return like['id'] 
  // })

  // const isLikedByCurrentUser = () => {
  //   if (postLikes.includes(props.currentUser.id)) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  return (
    <div className="feed-item">
      <div className="feed-item-avatar-image">
          <img src="https://assets.tumblr.com/images/default_avatar/octahedron_closed_64.png" 
          height="64" width="64"/>
      </div>
        <div className="feed-item-title">{props.post.title}</div>
        <div className="feed-item-body">{props.post.body}</div>
        {props.post.post_type}
      {/* <div className="feed-item-num-likes">
        {postLikes.length}
      </div> */}
      {/* <div className="feed-item-like-unlike">
        {isLikedByCurrentUser} ? 
          <button className="feed-item-unlike-button" onClick={props.unlike}>
            unlike
          </button>
          :
          <button className="feed-item-like--button" onClick={props.like}>
            like
          </button>
      </div> */}
    </div>
  )
}

export default PostFeedItem;