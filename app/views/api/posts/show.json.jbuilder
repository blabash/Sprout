json.post do
    json.set! @post.id do
        json.extract! @post, :id, :user_id, :title, :post_type, :body
        json.username @post.user.username
        json.likes do #change to likers
            json.array! @post.likes.map { |like| like.user_id } 
        end
    end
end

json.likes do
    @post.likes.each do |like|
        json.set! like.id do
            json.extract! like, :id, :user_id, :post_id
        end
    end
end

