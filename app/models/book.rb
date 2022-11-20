class Book < ApplicationRecord
    has_many :reviews, dependent: :destroy
    has_many :users, through: :reviews
    validates :title, presence: true
    validates :author, presence: true
    validates :genre, presence: true
    validates :description, length: { minimum: 20 }
    validates :book_img, presence: true
end
