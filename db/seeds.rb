# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
    
    Like.destroy_all
    Post.destroy_all
    User.destroy_all

    #Users
    demoUser = User.create(username: "demoUser", password: "userDemo")

    #Posts
    post1 = Post.create(user_id: demoUser.id, title: "My first post!", 
        body: "Testing out my new sprout account", post_type: "text")

    #Likes
    like1 = Like.create(user_id: demoUser.id, post_id: post1.id)

end
