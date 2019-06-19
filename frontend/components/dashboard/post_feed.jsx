import React from 'react';
import PostFeedItemClass from './post_feed_item_class';
import PostFormContainer from './post_form_container';
import { withRouter } from 'react-router-dom';
import debounce from 'lodash.debounce';

class PostFeed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasMore: true,
      sliceEndIdx: 4, //update to check if 3 is greater than posts.length
    };

    this.sliceMore = this.sliceMore.bind(this);

    // Binds our scroll event handler
    window.onscroll = debounce(() => {
      const {
        state: {
          hasMore,
        },
      } = this;

      // Bails early if there's nothing left 
      if (!hasMore) return;

      // Checks that the page has scrolled to the bottom
      if (
        window.innerHeight + document.documentElement.scrollTop
        === document.documentElement.offsetHeight
      ) {
        this.sliceMore();
      }
    }, 100);
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  sliceMore() {
    //expands our array of posts to be rendered if there are more posts
    this.setState({
      hasMore: this.state.sliceEndIdx < this.props.posts.length,
      sliceEndIdx: this.state.sliceEndIdx + 4 <= this.props.posts.length ?
        this.state.sliceEndIdx + 4 : 
        this.state.sliceEndIdx + (this.props.posts.length - this.state.sliceEndIdx)
    });
  }

  render() {
    let posts = this.props.posts.slice(0,this.state.sliceEndIdx).map((post, idx) => {
      let likesForThisPost = this.props.likes.filter((like) => {
        return like.post_id === post.id
      })
      let postOwner = this.props.users.filter((user) => {
        return user.id === post.user_id
      })[0]
      return(
        <PostFeedItemClass
            postOwner={postOwner}
            likesForThisPost={likesForThisPost}
            updatePost={this.props.updatePost}
            deletePost={this.props.deletePost}
            post={post}
            like={this.props.like}
            unlike={this.props.unlike}
            currentUserId={this.props.currentUserId}
            modal={this.props.modal}
            openModal={this.props.openModal}
            closeModal={this.props.closeModal}
            key={idx} />
      ) 
    }).reverse();
    return(
      <div>
        <div className="feed-centered">
          <div id="feed" className="all-posts">
            <PostFormContainer />
            {posts}
            {!this.state.hasMore &&
              <div>You did it! You reached the end!</div>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(PostFeed);