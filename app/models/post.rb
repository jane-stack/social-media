class Post < ApplicationRecord
  belongs_to :creator, class_name: "User"
  has_many :user_posts
  has_many :users, through: :user_posts

  has_many :comments
  has_many :likes

  validates :title, :content, presence: true
end
