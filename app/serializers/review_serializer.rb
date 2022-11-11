class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :review, :rating
  has_one :user_id
  has_one :book_id
end
