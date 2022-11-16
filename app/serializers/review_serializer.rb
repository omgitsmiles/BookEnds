class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :review, :rating, :user_id
  has_many :user_id  # is this possible?
  has_many :book_id
end
