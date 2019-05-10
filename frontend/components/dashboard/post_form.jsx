import React from 'react';
import TextPostForm from './postForms/text_post_form';
import PhotoPostForm from "./postForms/photo_post_form";

class PostForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = { postType: "unselected" };

        this.changePostType = this.changePostType.bind(this);
        this.retrievePostForm = this.retrievePostForm.bind(this); 
        this.closePostForm = this.closePostForm.bind(this);
    }

    closePostForm() {
        return e => {
            this.setState({
                postType: "unselected",
            })
        }
    }

    componentWillUnmount() {
        this.props.removeErrors();
    }

    retrievePostForm() {

        switch (this.state.postType) {
            case "text":
                return <TextPostForm 
                            currentUser={this.props.currentUser}
                            createPost={this.props.createPost}
                            closePostForm={this.closePostForm.bind(this)}
                        />
            case "photo":
                return <PhotoPostForm 
                            currentUser={this.props.currentUser}
                            createPost={this.props.createPost}
                            closePostForm={this.closePostForm.bind(this)}
                        />
            case "quote":
                return <TextPostForm 
                            currentUser={this.props.currentUser}
                            createPost={this.props.createPost}
                            closePostForm={this.closePostForm.bind(this)}
                        />
            case "link":
                return <TextPostForm 
                            currentUser={this.props.currentUser}
                            createPost={this.props.createPost}
                            closePostForm={this.closePostForm.bind(this)}
                        />
            case "chat":
                return <TextPostForm 
                            currentUser={this.props.currentUser}
                            createPost={this.props.createPost}
                            closePostForm={this.closePostForm.bind(this)}
                        />
            case "audio":
                return <TextPostForm 
                            currentUser={this.props.currentUser}
                            createPost={this.props.createPost}
                            closePostForm={this.closePostForm.bind(this)}
                        />
            case "video":
                return <TextPostForm
                            currentUser={this.props.currentUser}
                            createPost={this.props.createPost}
                            closePostForm={this.closePostForm.bind(this)}
                        />
            default:
                return null;
        }
    }

    changePostType(field) {
        return e => this.setState({ postType: field })
    }

    render() {
        if (this.state.postType !== "unselected") return this.retrievePostForm()

        return (
            <div className="new-post-form">
                <div className="feed-item-avatar adjustup">
                    <img src={this.props.currentUserProfilePic} 
                         className="feed-item-avatar-image"
                         height="64"
                         width="64"/>
                </div>
                <a className="text-post-button i-element" onClick={this.changePostType("text")}>
                    <i className="text-icon icon-post icon_post_text"></i>
                    <div className="text-icon-text">Text</div>
                </a>
                <a className="photo-post-button i-element" onClick={this.changePostType("photo")}>
                    <i className="photo-icon icon-post icon_post_photo"></i>
                    <div className="photo-icon-text">Photo</div>
                </a>
                <a className="quote-post-button i-element" onClick={this.changePostType("quote")}>
                    <i className="quote-icon icon-post icon_post_quote"></i>
                    <div className="quote-icon-text">Quote</div>
                </a>
                <a className="link-post-button i-element" onClick={this.changePostType("link")}>
                    <i className="link-icon icon-post icon_post_link"></i>
                    <div className="link-icon-text">Link</div>
                </a>
                <a className="chat-post-button i-element" onClick={this.changePostType("chat")}>
                    <i className="chat-icon icon-post icon_post_chat"></i>
                    <div className="chat-icon-text">Chat</div>
                </a>
                <a className="audio-post-button i-element" onClick={this.changePostType("audio")}>
                    <i className="audio-icon icon-post icon_post_audio"></i>
                    <div className="audio-icon-text">Audio</div>
                </a>
                <a className="video-post-button i-element" onClick={this.changePostType("video")}>
                    <i className="video-icon icon-post icon_post_video"></i>
                    <div className="video-icon-text">Video</div>
                </a>
            </div>
        )
    }
}

export default PostForm;