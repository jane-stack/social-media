class Post < ApplicationRecord
  belongs_to :creator, class_name: "User"
  has_many :comments, dependent: :destroy
  has_many :commented_users, through: :comments, source: :user

  has_many :likes, dependent: :destroy
  has_many :liked_users, through: :likes, source: :user

  validates :title, :content, presence: true
end
