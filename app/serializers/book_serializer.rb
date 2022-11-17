class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :genre, :description, :book_img
  has_many :users
  has_many :reviews
end
