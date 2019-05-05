import React from 'react';

const PostFeedItem = (props) => {
    return (
    	<div className="feed-item">
          <div className="feed-item-title">{props.post.title}</div>
          <div className="feed-item-body">{props.post.body}</div>
          {props.post.post_type}
            
        </div>
    )
}

export default PostFeedItem;