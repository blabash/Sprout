json.posts do
    @posts.each do |post|
        json.set! post.id do
            json.extract! post, :id, :user_id, :title, :post_type, :body
            json.username post.user.username
            json.likes do #change to likers
                json.array! post.likes.map { |like| like.user_id } 
            end
            # json.media url_for(@post.media) if @post.media.attached?
            # json.media_type @post.media.content_type[0, 5] if @post.media.attached?
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