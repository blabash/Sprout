export const createLike = (user_id, post_id) => (
    $.ajax({
        method: "POST",
        url: `/api/likes`,
        data: { like: { user_id, post_id } }
    })
);

export const removeLike = (like_id) => (
    $.ajax({
        method: "DELETE",
        url: `/api/likes/${like_id}`
    })
);
