import React from 'react';
import TextPostForm from './postForms/text_post_form';

class PostForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = { postType: "unselected" };

        this.changePostType = this.changePostType.bind(this);
        this.retrievePostForm = this.retrievePostForm.bind(this); 
        this.closePostForm = this.closePostForm.bind(this);
    }

    renderErrors() {
        return (
            <ul className="post-errors">
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}
                        className="post-errors-list-animate">
                        {error}
                    </li>
                ))}
            </ul>
        );
    }


    closePostForm() {
        return e => {
            let backgroundDiv = document.getElementById("backGroundDiv");
            backgroundDiv.className -= "primary-display-div";
            this.setState({
                postType: "unselected",
            })
        }
    }

    retrievePostForm() {
        let backgroundDiv = document.getElementById("backGroundDiv");
        backgroundDiv.className += "primary-display-div";

        switch (this.state.postType) {
            case "text":
                return <TextPostForm 
                            currentUser={this.props.currentUser}
                            createPost={this.props.createPost}
                            closePostForm={this.closePostForm.bind(this)}
                        />
            case "photo":
                return <TextPostForm 
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
                <a className="text-post-button" onClick={this.changePostType("text")}>
                    <i className="text-icon"></i>
                    <div className="text-icon-text">Text</div>
                </a>
                <a className="photo-post-button" onClick={this.changePostType("photo")}>
                    <i className="photo-icon"></i>
                    <div className="photo-icon-text">Photo</div>
                </a>
                <a className="quote-post-button" onClick={this.changePostType("quote")}>
                    <i className="quote-icon"></i>
                    <div className="quote-icon-text">Quote</div>
                </a>
                <a className="link-post-button" onClick={this.changePostType("link")}>
                    <i className="link-icon"></i>
                    <div className="link-icon-text">Link</div>
                </a>
                <a className="chat-post-button" onClick={this.changePostType("chat")}>
                    <i className="chat-icon"></i>
                    <div className="chat-icon-text">Chat</div>
                </a>
                <a className="audio-post-button" onClick={this.changePostType("audio")}>
                    <i className="audio-icon"></i>
                    <div className="audio-icon-text">Audio</div>
                </a>
                <a className="video-post-button" onClick={this.changePostType("video")}>
                    <i className="video-icon"></i>
                    <div className="video-icon-text">Video</div>
                </a>
            </div>
        )
    }
}

export default PostForm;