# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

ActiveRecord::Base.transaction do
    
    Like.destroy_all
    Post.destroy_all
    User.destroy_all

    #Users
    avatar1 = open('https://s3-us-west-1.amazonaws.com/sprout-seeds/profile_pic_1.png') 
    avatar2 = open('https://s3-us-west-1.amazonaws.com/sprout-seeds/profile_pic_2.jpg')
    avatar3 = open('https://s3-us-west-1.amazonaws.com/sprout-seeds/profile_pic_3.png')
    avatar4 = open('https://s3-us-west-1.amazonaws.com/sprout-seeds/profile_pic_4.jpg')
    avatar5 = open('https://s3-us-west-1.amazonaws.com/sprout-seeds/profile_pic_5.jpg')

    demoUser = User.create(username: "demoUser", password: "userDemo")
    user1 = User.create(username: "Codon", password: "userDemo")
    user2 = User.create(username: "BennyBlanco", password: "userDemo")
    user3 = User.create(username: "Buckmild", password: "userDemo")
    user4 = User.create(username: "Noremac", password: "userDemo")

    demoUser.profile_pic.attach(io: avatar1, filename: 'profile_pic_1.png')
    user1.profile_pic.attach(io: avatar2, filename: 'profile_pic_2.jpg')
    user2.profile_pic.attach(io: avatar3, filename: 'profile_pic_3.png')
    user3.profile_pic.attach(io: avatar4, filename: 'profile_pic_4.jpg')
    user4.profile_pic.attach(io: avatar5, filename: 'profile_pic_5.jpg')

    #Posts
    photo1 = open('https://s3-us-west-1.amazonaws.com/sprout-seeds/child-2715429_1280.jpg')
    photo2 = open('https://s3-us-west-1.amazonaws.com/sprout-seeds/tumblr_pqvt4fc0Cg1rngqfho1_540.gif')
    photo3 = open('https://s3-us-west-1.amazonaws.com/sprout-seeds/woman-3077180_1280.jpg')

    post1 = Post.create(user_id: demoUser.id, title: "My first post!", 
        body: "Testing out my new sprout account", post_type: "text")
    post2 = Post.create(user_id: user1.id, title: "Had a loooong day today...", 
        body: "Work stress", post_type: "text")
    post3 = Post.create(user_id: user2.id, title: "My first post!", 
        body: "Testing out my new sprout account", post_type: "text")
    post4 = Post.create(user_id: user3.id, title: "My first post!", 
        body: "Testing out my new sprout account", post_type: "text")
    post5 = Post.create(user_id: user4.id, title: "My first post!", 
        body: "Testing out my new sprout account", post_type: "text")

    photoPost1 = Post.create(user_id: demoUser.id, title: "My first photo post!", 
        body: "Testing out my new sprout account", post_type: "photo")
    photoPost2 = Post.create(user_id: user1.id, title: "My first photo post!", 
        body: "Testing out my new sprout account", post_type: "photo")
    photoPost3 = Post.create(user_id: user2.id, title: "My first photo post!", 
        body: "Testing out my new sprout account", post_type: "photo")

    photoPost1.media_element.attach(io: photo1, filename: 'child-2715429_1280.jpg')
    photoPost2.media_element.attach(io: photo2, filename: 'tumblr_pqvt4fc0Cg1rngqfho1_540.gif')
    photoPost3.media_element.attach(io: photo3, filename: 'woman-3077180_1280.jpg')

    #Likes
    like1 = Like.create(user_id: demoUser.id, post_id: post1.id)
    like2 = Like.create(user_id: user1.id, post_id: post1.id)
    like3 = Like.create(user_id: user2.id, post_id: post1.id)
    like4 = Like.create(user_id: user3.id, post_id: photoPost1.id)
    like5 = Like.create(user_id: user4.id, post_id: photoPost1.id)
    like6 = Like.create(user_id: demoUser.id, post_id: photoPost2.id)
    like7 = Like.create(user_id: user1.id, post_id: photoPost2.id)
    like8 = Like.create(user_id: user2.id, post_id: photoPost2.id)
    like9 = Like.create(user_id: user3.id, post_id: photoPost3.id)
    like10 = Like.create(user_id: user4.id, post_id: photoPost3.id)
end
