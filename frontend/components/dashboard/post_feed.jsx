import React from 'react';
import PostFeedItem from './post_feed_item';
import PostContainer from './posts/posts';

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
          <div>
            <div className="feed-centered">
              <div id="feed" className="all-posts">
                <PostContainer />
                {posts}
              </div>
            </div>
          </div>
        )
    }
}

export default PostFeed;