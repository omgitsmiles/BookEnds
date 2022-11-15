class BookSerializer < ActiveModel::Serializer
  attributes :title, :author, :genre, :description, :book_img

  has_many :reviews
end
