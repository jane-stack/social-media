class Like < ApplicationRecord
  belongs_to :post

  has_many :user_likes
  has_many :users, through: :user_likes
end
