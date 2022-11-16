class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :review, :rating, :user_id
  has_one :user_id  # is this possible?
  has_one :book_id
end
