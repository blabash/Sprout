import React from 'react';
import PostFeedItem from './post_feed_item';
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
                <div className="post-feed-profile-pic">
                    {/* {this.props.currentUser.profilePic} */} 
                </div>
                <div className="post-form-container-div">
                    <PostFormContainer />
                </div>
                <div id="feed" className="all-posts">
                    {posts}
                </div>
            </div>
        )
    }
}

export default PostFeed;