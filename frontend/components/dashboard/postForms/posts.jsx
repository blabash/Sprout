import React from 'react';
import ReactDOM from 'react-dom';

function PostIcon(props) {
    return (
        <div className="i-element">
          <i className={"icon-post " + props.class}/>
          <div className="post-text">{props.name}</div>
        </div>
    );
}

class PostIcons extends React.Component {
    render() {
        // https://assets.tumblr.com/images/post_type_div.png
        return (
            <div className="icons-container">
                <PostIcon class="icon_post_text" name="Text"/>
                <PostIcon class="icon_post_photo" name="Photo"/>
                <PostIcon class="icon_post_quote" name="Quote"/>
                <PostIcon class="icon_post_link" name="Link"/>
                <PostIcon class="icon_post_chat" name="Chat"/>
                <PostIcon class="icon_post_audio" name="Audio"/>
                <PostIcon class="icon_post_video" name="Video"/>
            </div>
        );
    }
}

class PostContainer extends React.Component {
    render() {
        return (
            <PostIcons />
        );
    }
}

export default PostContainer;
