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
        data: { post },
    }
    // debugger
    if (post.getAll) { //this is hackey way of determing whether this has media_element
        request.data = post; //for some reason media_element posts only works when post is not wrapped in {}
        request.contentType = false;
        request.processData = false;
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