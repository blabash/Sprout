import React from 'react';
import ReactDOM from 'react-dom';
// import '../../../app/assets/stylesheets/index.css';

function PostIcon(props) {
    return (
        <div className="post-icon">
            <img src="https://dsuk.innogamescdn.com/asset/2661920a/graphic/big_buildings/main3.png" alt="{props.name}" />
            <div className="post-text">{props.name}</div>
        </div>
    );
}

class PostIcons extends React.Component {
    render() {
        return (
            <div className="icon-container">
                <PostIcon name="Text" />
                <PostIcon name="Photo" />
                <PostIcon name="Quote" />
                <PostIcon name="Link" />
                <PostIcon name="Chat" />
                <PostIcon name="Audio" />
                <PostIcon name="Video" />
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

// ReactDOM.render(
//     <PostContainer />,
//     document.getElementById('root')
// );



