class User < ApplicationRecord
  PROFILE_PIX = [
    "app/assets/images/profile_pic_1.png",
    "app/assets/images/profile_pic_2.jpg",
    "app/assets/images/profile_pic_3.png",
    "app/assets/images/profile_pic_4.jpg",
    "app/assets/images/profile_pic_5.jpg"
  ]

  attr_reader :password

  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  after_initialize :ensure_session_token
  before_create :attach_profile_pic

  has_many :posts,
    foreign_key: :user_id,
    class_name: :Post

  has_many :follows,
    foreign_key: :user_id,
    class_name: :Follow
    
  has_many :followers,
    foreign_key: :follower_id,
    class_name: :Follow

  has_many :likes,
    foreign_key: :user_id,
    class_name: :Like

  has_many :liked_posts,
    through: :likes,
    source: :post

  has_one_attached :profile_pic

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def attach_profile_pic
    self.profile_pic.attach(io: open(PROFILE_PIX.sample), filename: "default")
  end

  def reset_session_token!
    generate_unique_session_token
    save!
    self.session_token
  end

  private

  def ensure_session_token
    generate_unique_session_token unless self.session_token
  end

  def new_session_token
    SecureRandom.urlsafe_base64
  end

  def generate_unique_session_token
    self.session_token = new_session_token
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
    self.session_token
  end
end
