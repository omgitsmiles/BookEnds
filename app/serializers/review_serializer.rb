class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :review, :rating, :user_id, :book_id
  # has_many :user 
  # has_many :book
end
