import React from 'react';
import PostFeedItem from './post_feed_item';
import PostFormContainer from './post_form_container';
import { withRouter } from 'react-router-dom';

// const profilePix = [
//   "https://assets.tumblr.com/images/default_avatar/sphere_closed_128.png",
//   "https://66.media.tumblr.com/avatar_2e9b02bc25d6_128.pnj",
//   "https://66.media.tumblr.com/avatar_024613d70459_128.pnj",
//   "https://66.media.tumblr.com/avatar_bd4ff26294a9_128.pnj",
//   "https://66.media.tumblr.com/avatar_8f90d7eeccae_128.pnj",
//   "https://66.media.tumblr.com/004fac2f3b9691a47941d0710496bfff/tumblr_o51oavbMDx1ugpbmuo9_250.png",
//   "https://66.media.tumblr.com/2060fe62b7ed3b46e5789356942a305e/tumblr_o51oavbMDx1ugpbmuo2_540.png",
//   "https://66.media.tumblr.com/9f9b498bf798ef43dddeaa78cec7b027/tumblr_o51oavbMDx1ugpbmuo7_500.png",
//   "https://i.pinimg.com/originals/a8/be/9a/a8be9ac5b1172390fbe5249df38df051.jpg",
// ]; //make this use active storage

class PostFeed extends React.Component {
    constructor(props) {
        super(props);
        
        // this.randomProfilePic = this.randomProfilePic.bind(this);
    }

    // randomProfilePic() {
    //   return profilePix[Math.floor(Math.random() * profilePix.length)]
    // }

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        let posts = this.props.posts.map((post, idx) => {
          let likesForThisPost = this.props.likes.filter((like) => {
            return like.post_id === post.id
          })
          return(
              <PostFeedItem
                  // profilePic={this.randomProfilePic()}
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