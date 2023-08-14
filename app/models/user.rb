class User < ApplicationRecord
    has_secure_password
    has_many :user_posts, foreign_key: "creator_id", class_name: "Post"
    has_many :comments, dependent: :destroy
    has_many :commented_posts, through: :comments, source: :post

    has_many :likes, dependent: :destroy
    has_many :liked_posts, through: :likes, source: :post

    validates :name, presence: true
    validates :username, :email, uniqueness: true, presence: true
    validates :password, length: { minimum: 8 }

    validate :password_lower_case
    validate :password_uppercase
    validate :password_special_char
    validate :password_contains_number
    
    def password_uppercase
        return if !!password.match(/\p{Upper}/)
        errors.add :password, ' must contain at least 1 uppercase '
    end

    def password_lower_case
        return if !!password.match(/\p{Lower}/)
        errors.add :password, ' must contain at least 1 lowercase '
    end

    def password_special_char
        special = "?<>',?[]}{=-)(*&^%$#`~{}!"
        regex = /[#{special.gsub(/./){|char| "\\#{char}"}}]/
        return if password =~ regex
        errors.add :password, ' must contain special character'
    end

    def password_contains_number
        return if password.count("0-9") > 0
        errors.add :password, ' must contain at least one number'
    end
end
