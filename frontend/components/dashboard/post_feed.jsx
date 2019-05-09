import React from 'react';
import PostFeedItem from './post_feed_item';
import PostFormContainer from './post_form_container';
import { withRouter } from 'react-router-dom';

class PostFeed extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        let posts = this.props.posts.map((post, idx) => {
          let likesForThisPost = this.props.likes.filter((like) => {
            return like.post_id === post.id
          })
          let postOwner = this.props.users.filter((user) => {
            return user.id === post.user_id
          })[0]
          return(
              <PostFeedItem
                  postOwner={postOwner}
                  likesForThisPost={likesForThisPost}
                  updatePost={this.props.updatePost}
                  deletePost={this.props.deletePost}
                  post={post}
                  like={this.props.like}
                  unlike={this.props.unlike}
                  currentUserId={this.props.currentUserId}
                  key={idx} />
          ) 
        }).reverse();
        return(
          <div>
            <div className="feed-centered">
              <div id="feed" className="all-posts">
                <PostFormContainer />
                {posts}
              </div>
            </div>
          </div>
        )
    }
}

export default withRouter(PostFeed);