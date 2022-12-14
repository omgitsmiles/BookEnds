class ReviewsController < ApplicationController
    before_action :authorize

    def index
        reviews = find_user.reviews.all
        render json: reviews, status: 200
    end

    def create
        review = find_user.reviews.create!(review_params)
        render json: review, status: 201
    end

    def update
        review = find_user.reviews.find(params[:id])
        review.update!(review_params)
        render json: review, status: 202
    end

    def destroy
       review = find_user.reviews.find(params[:id])
       review.destroy
       head 204
    end

    private

    def find_user
        User.find_by(id: session[:user_id])
    end

    def find_review
        Review.find(params[:id])
    end

    def authorize 
        render json: { error: ["Must be logged in"] }, status: 401 unless session[:user_id]
    end

    def review_params
        params.permit(:review, :rating, :book_id)
    end

end
