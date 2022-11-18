class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :review, :rating, :user_id
  has_many :user  # is this possible?
  has_many :book
end
