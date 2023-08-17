class User < ApplicationRecord
    has_secure_password
    has_many :user_posts, foreign_key: "creator_id", class_name: "Post"
    has_many :comments, dependent: :destroy
    has_many :commented_posts, through: :comments, source: :post

    has_many :likes, dependent: :destroy
    has_many :liked_posts, through: :likes, source: :post

    before_save { email.downcase! }
    validates :name, presence: true
    validates :username, :email, uniqueness: true, presence: true
    validates :password, presence: true, length: { minimum: 8 }

    validate :password_requirements

    private

    def password_requirements
        return if password.blank?

        unless password.match?(/[a-z]/)
            errors.add(:password, "must contain one lowercase letter")
        end

        unless password.match?(/[A-Z]/)
            errors.add(:password, "must contain one uppercase letter")
        end

        unless password.match?(/\d/)
            errors.add(:password, "must contain one digit")
        end

        unless password.match?(/[[:^alnum:]]/)
            errors.add(:password, "must contain one special character")
        end
    end
end
