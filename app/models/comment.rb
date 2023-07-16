class Comment < ApplicationRecord
  belongs_to :post

  has_many :user_comments
  has_many :users, through: :user_comments
end
