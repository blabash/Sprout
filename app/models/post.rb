class Post < ApplicationRecord
    validates :user_id, :type, presence: true

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    has_many :likes,
        foreign_key: :post_id,
        class_name: :Like,
        dependent: :destroy

    has_many :likers,
        through: :likes,
        source: :user

    has_many_attached :elements
end
