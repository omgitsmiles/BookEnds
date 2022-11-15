class ReviewsController < ApplicationController

    def update
        book = Book.find_by(book_id: params[:book_id])
        review = book.reviews.update!(review_params)
        render json: review, status: 202
    end

    def index
        book = Book.find_by(book_id: params[:book_id])
        review = book.reviews.all
        render json: review, status: 200
    end

    private

    def review_params
        params.permit(:review, :rating)
    end

end
