import React from 'react';

const PostFeedItem = (props) => {
    return (
        <div>
            <ul>
                <li>{props.post.title}</li>
                <li>{props.post.body}</li>
                <li>{props.post.post_type}</li>
            </ul>
            
        </div>
    )
}

export default PostFeedItem;