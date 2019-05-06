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
        this.props.createPost(this.state)
    }

    update(field) {
        return e => {
            this.setState({
                [field]: e.target.value
            })
        }
    }

    render() {
        return(
            <div className="text-post-form-container">
                <button className="currentUser-button-post-form">
                    {this.props.currentUser.username}
                </button>
                <form className="post-form-form" onSubmit={this.handleSubmit}>
                    <input
                    type="text"
                    value={this.state.title}
                    onChange={this.update("title")}
                    placeholder="Title"
                    />
                    <input
                    type="text"
                    value={this.state.body}
                    onChange={this.update("body")}
                    placeholder="Your text here."
                    />
                    <input className="post-form-form-post-button" 
                        type="submit"
                        value="Post"/>
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