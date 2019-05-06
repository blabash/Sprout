@posts.each do |post|
    json.set! post.id do
        json.extract! post, :id, :user_id, :title, :post_type, :body
        json.username post.user.username
        # json.likes do
        #     post.likes.each do |like|
        #         json.extract! like, :user_id
        #     end
        # end
        # json.media url_for(@post.media) if @post.media.attached?
        # json.media_type @post.media.content_type[0, 5] if @post.media.attached?
    end
end