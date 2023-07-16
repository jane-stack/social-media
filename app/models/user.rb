class User < ApplicationRecord
    has_secure_password
    has_many :user_posts
    has_many :posts, through: :user_posts

    has_many :user_comments
    has_many :comments, through: :user_comments

    has_many :user_likes
    has_many :likes, through: :user_likes
end
