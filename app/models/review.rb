class Review < ApplicationRecord
  belongs_to :user
  belongs_to :book
  validates :user_id, uniqueness: { scope: :book_id, message: " limited 1 review per book" }
  validates :review, presence: true

  def review_username
    self.user.username
  end
end
