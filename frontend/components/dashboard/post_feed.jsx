import React from 'react';
import PostFeedItem from './post_feed_item';
import PostContainer from './postForms/posts';
import PostFormContainer from './post_form_container';

class PostFeed extends React.Component {
    constructor(props) {
        super(props);
        
    }

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        let posts = this.props.posts.map((post, idx) => {
            return(
                <PostFeedItem 
                    post={post}
                    key={idx} />
            ) 
        }).reverse();

        return(
          <div>
            <div className="feed-centered">
              <div className="post-form-container-div">
                    <PostFormContainer />
              </div>
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