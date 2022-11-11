class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :review
      t.integer :rating
      t.belongs_to :user_id, null: false, foreign_key: true
      t.belongs_to :book_id, null: false, foreign_key: true

      t.timestamps
    end
  end
end
