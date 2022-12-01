class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :genre, :description, :book_img 
  has_many :reviews

  # def book_reviews
  #     object.reviews.map do |review| 
  #       {
  #         id: review.id,
  #         review: review,
  #         rating: review.rating,
  #         user_id: review.user.id,
  #         username: review.user.username
  #       }
  #     end
  # end

end
