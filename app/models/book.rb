class Book < ApplicationRecord
    has_many :reviews, dependent: :destroy
    has_many :users, through: :reviews
    validates :title, uniqueness: true, presence: true
    validates :author, uniqueness: true, presence: true
    validates :genre, uniqueness: true, presence: true
    validates :description, length: { minimum: 20 }
    validates :book_img, presence: true
end
