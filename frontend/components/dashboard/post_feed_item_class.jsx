import React from 'react';
import EditPostForm from './edit_post_form';

class PostFeedItemClass extends React.Component {
    constructor(props) {
        super(props);

        this.isLikedByCurrentUser = this.isLikedByCurrentUser.bind(this);
        this.displayPostMedia = this.displayPostMedia.bind(this);
    }

    isLikedByCurrentUser() {
        const likeUserIds = this.props.likesForThisPost.map((like) => {
            return like.user_id
        })

        if (likeUserIds.includes(this.props.currentUserId)) {
            return (
                <button className="feed-item-icon-button red"
                    onClick={() => this.props.unlike(this.props.post.id)}>
                    <i className="icon_like"/>
        </button>
            )
        } else {
            return (
                <button className="feed-item-icon-button"
                    onClick={() => this.props.like(this.props.currentUserId, this.props.post.id)}>
                    <i className="icon_like"/>
        </button>
            )
        }
    }

    displayPostMedia() {
        // debugger
        if (this.props.post.mediaUrl) {
            return (
                <div className="photo-post-img">
                    <img src={this.props.post.mediaUrl} />
                </div>
            )
        } else {
            return (
                <div className="feed-item-title">{this.props.post.title}</div>
            )
        }
    }

    displayEditPostForm() {
            return(
                <EditPostForm postOwner={this.props.postOwner}
                            updatePost={this.props.updatePost}
                            post={this.props.post}
                            modal={this.props.modal}
                            openModal={this.props.openModal}
                            closeModal={this.props.closeModal}
                />
            )
    }

    displayInteractionButtons() {
        if (this.props.post.user_id === this.props.currentUserId) {
            return (
                <div className="post-feed-item-buttons">
                    <button className="feed-item-icon-button"
                            onClick={this.props.openModal}>
                            <i className="icon_edit"/>
                    </button>

                    <button onClick={() => this.props.deletePost(this.props.post.id)} 
                            className="feed-item-icon-button">
                            <i className="icon_delete"/>
                    </button>
                </div>
            )
        } else {
            return null
        }
    }

    // interactionButtons() {
    //     if (this.state.interactionButtons) {
    //         return <button>Derp</button>
    //     }
    // }

    render() {
        return (
            <div className="feed-item">
              <div className="feed-item-avatar">
                <img src={this.props.postOwner.profile_pic} className="feed-item-avatar-image" height="64" width="64" />
              </div>
              <div className="feed-content">
                <div className="post-feed-post-owner-username">
                    {this.props.postOwner.username}
                </div>
                {this.displayPostMedia()}
                <div className="feed-item-body">{this.props.post.body}</div>
                <div className="feed-item-num-likes">
                    {this.props.likesForThisPost.length} notes
      </div>
                <div className="feed-item-like-unlike-buttons">
                    {this.isLikedByCurrentUser()}
                </div>
                <div className="feed-item-icon-button">
                    <i className="icon_reblog"/>
                </div>
                {this.displayInteractionButtons()}
                {this.displayEditPostForm()}
              </div>
            </div>
        )
    }
}

export default PostFeedItemClass;