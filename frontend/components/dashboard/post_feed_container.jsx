import { connect } from 'react-redux';
import PostFeed from "./post_feed";
import { fetchPosts } from '../../actions/post_actions';

const mapStateToProps = state => {
    let posts = Object.values(state.entities.posts)
    return({
        currentUser: state.entities.users,
        posts: posts,
    })
}

const mapDispatchToProps = dispatch => {
    return({
        fetchPosts: () => dispatch(fetchPosts()),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(PostFeed);