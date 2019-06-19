import { createPost } from "../../../util/post_api_util";

import React from 'react';

class PhotoPostForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = ({
            title: "dummyTitle",   //this is to satisfy backend constraint that all posts must have a title
            user_id: this.props.currentUser.id,
            caption: "",
            post_type: "photo",
            photo_file: null,
            photo_url: null,
        })
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('post[title]', this.state.title);
        formData.append('post[body]', this.state.caption);
        formData.append('post[media_element]', this.state.photo_file);
        formData.append('post[post_type]', this.state.post_type);
        // debugger
        this.props.createPost(formData).then(this.props.closePostForm());
    }

    update(field) {
        return e => {
            this.setState({
                [field]: e.target.value
            })
        }
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();

        fileReader.onloadend = () => {
          this.setState({ 
            photo_file: file,
            photo_url: fileReader.result,
          });
        };

        if (file) {
          fileReader.readAsDataURL(file);
        }
        
      document.getElementsByClassName("photo-input-tray")[0].style.display ="none";
    }

    postButton() {
        if (!this.state.photo_file) {
            return <button className="disabled-submit-post-form-button" disabled>Post</button>
        } else {
            return <button className="submit-post-form-button" type="submit">Post</button>
        }
    }

    render() {
      const preview = this.state.photo_url ? <img src={this.state.photo_url} /> : null; 
        return (
          <div className="photo-post-form-container">
            <div className="feed-item-avatar adjustup">
              <img
                src={this.props.currentUserProfilePic}
                className="feed-item-avatar-image"
                height="64"
                width="64"
              />
            </div>
            <button className="currentUser-button-post-form">
              {this.props.currentUsername}
            </button>
            <form
              className="post-form-form"
              onSubmit={this.handleSubmit}
            >
              <div className="photo-input-tray">
                <i className="photo-icon icon-post icon_postforms_add_photo"></i>
                <div className="photo-input-tray-text">Upload A Photo!</div>
                <input
                  type="file"
                  className="photo-post-form-file-input"
                  accept="image/*"
                  onChange={this.handleFile.bind(this)}
                />
              </div>
              <div className="photo-post-img-preview">
                {preview}
              </div>
              <div className="post-form-caption">
                <textarea
                  className="photo-post-form-caption-input"
                  value={this.state.caption}
                  onChange={this.update("caption")}
                  placeholder="Add a caption, if you like"
                />
              </div>
              {this.postButton()}
            </form>
            <button
              className="post-form-form-close-button"
              onClick={this.props.closePostForm()}
            >
              Close
            </button>
          </div>
        );
    }
}

export default PhotoPostForm;