class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :email, :quote, :avatar

  has_many :books
  has_many :reviews
end
