class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :review, :rating, :user_id, :book_id, :review_username
  belongs_to :user 
  belongs_to :book
end
