import { createPost } from "../../../util/post_api_util";

import React from 'react';

class PhotoPostForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = ({
            user_id: this.props.currentUser.id,
            caption: "",
            post_type: "photo",
            photo_file: null
        })
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('post[title]', this.state.caption);
        formData.append('post[media_element]', this.state.photo_file);
        formData.append('post[post_type]', this.state.post_type);
        // debugger
        this.props.createPost(formData).then(this.props.closePostForm());
        let backgroundDiv = document.getElementById("backGroundDiv");
        // backgroundDiv.className -= "primary-display-div";
    }

    update(field) {
        return e => {
            this.setState({
                [field]: e.target.value
            })
        }
    }

    handleFile(e) {
        this.setState({ photo_file: e.currentTarget.files[0] });
    }

    postButton() {
        if (!this.state.caption) {
            return <button className="disabled-submit-post-form-button" disabled>Post</button>
        } else {
            return <button className="submit-post-form-button" type="submit">Post</button>
        }
    }

    render() {
        return (
            <div className="photo-post-form-container">
                <button className="currentUser-button-post-form">
                    {this.props.currentUser.username}
                </button>
                <form className="post-form-form" onSubmit={this.handleSubmit}>

  <div className="box__input">
    <input className="box__file" type="file" name="files[]" id="file" data-multiple-caption="{count} files selected" multiple />
    <label for="file"><strong>Choose a file</strong><span className="box__dragndrop"> or drag it here</span>.</label>
    <button className="box__button" type="submit">Upload</button>
  </div>
  <div className="box__uploading">Uploading&hellip;</div>
  <div className="box__success">Done!</div>
  <div className="box__error">Error! <span></span>.</div>



                    <input type="file"
                        className="photo-post-form-file-input"
                        accept="image/*"
                        onChange={this.handleFile.bind(this)}
                    />
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
                <button className="post-form-form-close-button"
                    onClick={this.props.closePostForm()}>
                    Close
                </button>
            </div>
        )
    }
}

export default PhotoPostForm;