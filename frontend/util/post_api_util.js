export const fetchPosts = () => {
    return (
        $.ajax({
            method: "GET",
            url: "/api/posts"
        })
    )
}

export const fetchPost = (id) => {
    return (
        $.ajax({
            method: "GET",
            url: `/api/posts/${id}`
        })
    )
}

export const createPost = (post) => {
    const request = {
        method: "POST",
        url: 'api/posts',
        data: post,
        contentType: false,
        processData: false,
    }

    return $.ajax(request);
}

export const updatePost = (post) => {
    return(
        $.ajax({
            method: 'patch',
            url: `api/posts/${post.id}`,
            data: { post }
        })
    )
};

export const deletePost = (id) => {
    return (
        $.ajax({
            method: "DELETE",
            url: `/api/posts/${id}`,
        })
    )
}