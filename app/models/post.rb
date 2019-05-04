class Post < ApplicationRecord
    validates :user_id, :type, :title, presence: true

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    has_many :likes,
        foreign_key: :post_id,
        dependent: :destroy,
        class_name: :Like

    has_many :likers,
        through: :likes,
        source: :user

    has_one_attached :element
end
