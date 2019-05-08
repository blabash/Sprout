json.posts do
    @posts.each do |post|
        json.set! post.id do
            json.extract! post, :id, :user_id, :title, :post_type, :body
            json.username post.user.username
            json.mediaUrl url_for(post.media_element) if post.media_element.attached?
            json.likes do #change to likers
                json.array! post.likes.map { |like| like.user_id } 
            end
        end
    end
end


json.likes do
    @posts.each do |post|
        post.likes.each do |like|
            json.set! like.id do
                json.extract! like, :id, :user_id, :post_id
            end
        end
    end
end