import { connect } from 'react-redux';

import PostForm from './post_form';

const mapDispatchToProps = dispatch => {
    return({
        createPost: post => dispatch(createPost(post)),
    })
};

export default connect(null, mapDispatchToProps)(PostForm);