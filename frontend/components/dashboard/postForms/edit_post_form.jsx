import React from 'react';

class EditPostForm extends React.Component {
    constructor(props) {
        super(props);

        // this.state = ({
        //     title: this.props.post.title,
        //     body: this.props.post.body,
        // })
        this.handleSubmit = this.handleSubmit.bind(this);
        this.displayMedia = this.displayMedia.bind(this);
        $('#root').on('change keyup keydown paste cut', 'textarea', function () {
            $(this).height(0).height(this.scrollHeight);
        }).find('textarea').change();
    }

    componentDidUpdate() {
        this.props.fetchPost(this.props.postId).then(() => {
            this.setState(this.props.post)
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        // debugger;
        this.props.updatePost(this.state).then(this.props.closeModal());
    }

    update(field) {
        return e => {
            this.setState({
                [field]: e.target.value
            })
        }
    }

    postButton() {
        if (!this.state.title) {
            return <button className="disabled-submit-post-form-button" disabled>Post</button>
        } else {
            return <button className="submit-post-form-button" type="submit">Post</button>
        }
    }

    displayMedia() {
        if(this.props.post.post_type === "photo") {
            return <img src={this.props.post.mediaUrl} />
        } else {
            return null
        }
    }

    render() {
        debugger
        if(this.props.isOpen){
            return (
                <div className="modal-background" onClick={this.props.closeModal}>
                    <div className="modal-child" onClick={e=> e.stopPropagation()}>
                        <div className="text-post-form-container">
                            <button className="currentUser-button-post-form">
                                {this.props.post.username}
                            </button>
                            <form className="post-form-form" onSubmit={this.handleSubmit}>
                                <div className="post-form-title">
                                    <textarea
                                        className="post-form-title-input"
                                        value={this.state.title}
                                        onChange={this.update("title")}
                                        // placeholder="Title"
                                    />
                                </div>
                                <div>
                                    {this.props.post.post_type === "photo" ? 
                                        <img src={this.props.post.mediaUrl} /> : null
                                    }
                                </div>
                                <div className="post-form-body">
                                    <textarea
                                        className="post-form-body-input"
                                        value={this.state.body}
                                        onChange={this.update("body")}
                                        // placeholder="Your text here."
                                    />
                                </div>
                                {this.postButton()}
                            </form>
                            <button className="post-form-form-close-button"
                                onClick={this.props.closeModal}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default EditPostForm;