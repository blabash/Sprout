import React from 'react';

class TextPostForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = ({
            user_id: this.props.currentUser.id,
            title: "",
            body: "",
            post_type: "text",
        })
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        // debugger;
        this.props.createPost(this.state).then(this.props.closePostForm())
        let backgroundDiv = document.getElementById("backGroundDiv");
        backgroundDiv.className -= "primary-display-div";
    }

    update(field) {
        return e => {
            this.setState({
                [field]: e.target.value
            })
        }
    }

    postButton() {
        console.log("inside postButton")
        if (!this.state.title) {
            console.log("inside postButton disabled")
            return <button className="disabled-submit-post-form-button" disabled>Post</button>
        } else {
            console.log("inside postButton enabled")
            return <button className="submit-post-form-button" type="submit">Post</button>
        }
    }

    render() {
        return(
            <div className="text-post-form-container">
                <button className="currentUser-button-post-form">
                    {this.props.currentUser.username}
                </button>
                <form className="post-form-form" onSubmit={this.handleSubmit}>
                    <div className="post-form-title">
                        <input
                        type="text"
                        className="post-form-input"
                        value={this.state.title}
                        onChange={this.update("title")}
                        placeholder="Title"
                        />
                    </div>
                    <div className="post-form-body">
                        <input
                        type="text"
                        className="post-form-input"
                        value={this.state.body}
                        onChange={this.update("body")}
                        placeholder="Your text here."
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

export default TextPostForm;