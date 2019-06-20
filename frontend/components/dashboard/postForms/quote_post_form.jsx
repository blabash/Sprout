import React from 'react';

class QuotePostForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = ({
            user_id: this.props.currentUser,
            title: "",
            body: "",
            post_type: "quote",
        })
        this.handleSubmit = this.handleSubmit.bind(this);

        $('#root').on('change keyup keydown paste cut', 'textarea', function () {
            $(this).height(0).height(this.scrollHeight);
        }).find('textarea').change();
    }

    handleSubmit(e) {
        e.preventDefault();
        // debugger;
        this.props.createPost(this.state).then(this.props.closePostForm());
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

    render() {
        return (
            <div className="text-post-form-container">
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
                    <div className="post-form-title">
                        <textarea
                            className="post-form-title-input"
                            value={this.state.title}
                            onChange={this.update("title")}
                            placeholder='"Quoth the Raven"'
                        />
                    </div>
                    <div className="post-form-body">
                        <textarea
                            className="post-form-body-input"
                            value={this.state.body}
                            onChange={this.update("body")}
                            placeholder="- Source"
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

export default QuotePostForm;