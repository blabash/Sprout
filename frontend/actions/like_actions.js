import * as LikeAPIUtil from '../util/like_api_util';

export const RECEIVE_LIKE = "RECEIVE_LIKE"
export const REMOVE_LIKE = "REMOVE_LIKE"

const receiveLike = (like) => {
    return({
        type: RECEIVE_LIKE,
        like: like
    })
}

const removeLike = (like) => {
    return({
        type: REMOVE_LIKE,
        likeId: like.id
    })
}

export const createLike = (user_id, post_id) => dispatch => (
    LikeAPIUtil.createLike(user_id, post_id).then(
        like => dispatch(receiveLike(like))
    )
);

export const deleteLike = like_id => dispatch => (
    LikeAPIUtil.deleteLike(like_id).then(
        like => dispatch(removeLike(like))
    )
);