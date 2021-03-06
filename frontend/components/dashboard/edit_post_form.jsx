import React from 'react';

class EditPostForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = ({
            id: this.props.post.id,
            title: this.props.post.title,
            body: this.props.post.body,
            post_type: this.props.post.post_type,
        })
        this.handleSubmit = this.handleSubmit.bind(this);

        $('#root').on('change keyup keydown paste cut', 'textarea', function () {
            $(this).height(0).height(this.scrollHeight);
        }).find('textarea').change();
    }

    componentDidUpdate() {
            $("#root")
              .on("load", function() {
                $(this)
                  .height(0)
                  .height(this.scrollHeight);
              })
              .find("textarea")
              .change();
    }

    componentWillReceiveProps(nextProps) {
      this.setState({
          id: nextProps.post.id,
          title: nextProps.post.title,
          body: nextProps.post.body,
          post_type: nextProps.post.post_type,
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

    render() {
        if(this.props.modal === this.props.post.id){
          // debugger;
            return (
              <div
                className="modal-background"
                onClick={this.props.closeModal}
              >
                <div
                  className="modal-child"
                  onClick={e => e.stopPropagation()}
                >
                  <div className="text-post-form-container">
                    <button className="currentUser-button-post-form">
                      {this.props.postOwner.username}
                    </button>
                    <form
                      className="post-form-form"
                      onSubmit={this.handleSubmit}
                    >
                      <div className="post-form-title">
                        {this.props.post.post_type !== "photo" ? (
                          <textarea
                            className="post-form-title-input"
                            value={this.state.title}
                            id="edit-title-textarea"
                            onChange={this.update("title")}
                          />
                        ) : null}
                      </div>
                      <div className="photo-post-img">
                        {this.props.post.post_type === "photo" ? (
                          <img src={this.props.post.mediaUrl} />
                        ) : null}
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
                    <button
                      className="post-form-form-close-button"
                      onClick={this.props.closeModal}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            );
        } else {
            return null;
        }
    }
}

export default EditPostForm;