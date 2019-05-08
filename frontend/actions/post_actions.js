import * as PostAPIUtil from '../util/post_api_util';
import { receiveErrors } from "./error_actions";

export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";


export const receiveAllPosts = ({posts, likes}) => {
    return({
        type: RECEIVE_ALL_POSTS,
        posts,
        likes,
    })
};

export const receivePost = ({post, likes}) => ({
    type: RECEIVE_POST,
    post,
    likes,
});

export const removePost = post => ({
    type: REMOVE_POST,
    postId: post.id
});

export const fetchPosts = () => dispatch => (
    PostAPIUtil.fetchPosts().then(
        payload => dispatch(receiveAllPosts(payload)),
        err => dispatch(receiveErrors(err.responseJSON))
    )
);

export const fetchPost = (id) => dispatch => (
    PostAPIUtil.fetchPost(id).then(
        payload => dispatch(receivePost(payload)),
        err => dispatch(receiveErrors(err.responseJSON))
    )
);

export const createPost = (post) => dispatch => (
    PostAPIUtil.createPost(post).then(
        post => dispatch(receivePost(post)),
        err => dispatch(receiveErrors(err.responseJSON))
    )
);

export const updatePost = (post) => dispatch => (
    PostAPIUtil.updatePost(post).then(
        post => dispatch(receivePost(post)),
        err => dispatch(receiveErrors(err.responseJSON))
    )
);

export const deletePost = (id) => dispatch => (
    PostAPIUtil.deletePost(id).then(
        post => dispatch(removePost(post)),
        err => dispatch(receiveErrors(err.responseJSON))
    )
);



