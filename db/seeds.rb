# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
    
    Like.destroy_all
    
    User.destroy_all


    #Users

    #Posts

    #Likes

    #Follows

    #start with Users and go down dependencies so you have the foreign keys available



end
