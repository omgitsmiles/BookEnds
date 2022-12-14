class User < ApplicationRecord
    has_secure_password
    has_many :reviews
    has_many :books, through: :reviews
    validates :username, presence: true, uniqueness: true
    validates :quote, presence: true
    validates :avatar, presence: true
end
