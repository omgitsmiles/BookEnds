class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :review, :rating, :user_id
  has_many :users  # is this possible?
  has_many :books
end
