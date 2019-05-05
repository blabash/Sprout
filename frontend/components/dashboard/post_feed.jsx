import React from 'react';
import PostFeedItem from './post_feed_item';

class PostFeed extends React.Component {
    constructor(props) {
        super(props);
        
    }

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        let posts = this.props.posts.map(post => {
            return(
                <PostFeedItem 
                    post={post} 
                    key={post.id} />
            ) 
        })

        return(
            <div id="feed" className="all-posts">
                {posts}
            </div>
        )
    }
}

export default PostFeed;