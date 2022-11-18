class ReviewsController < ApplicationController
    before_action :authorize, only: [:create, :update]

    def index
        reviews = Review.all
        render json: reviews, status: 200
    end

    def create
        user = User.find_by(id: session[:user_id])
        review = user.reviews.create!(review_params)
        render json: review, status: 201
    end

    def update
        user = User.find_by(id: session[:user_id])
        review = user.reviews.update(review_params)
        render json: review, status: 202
    end

    def destroy
        review = Review.find(params[:id])
        review.destroy
        head :no_content
    end

    private

    def find_user
        User.find_by(id: session[:id])
    end

    def authorize 
        render json: { error: ["Must be logged in to write a review!"] }, status: 401 unless session[:user_id]
    end

    def review_params
        params.permit(:review, :rating, :book_id)
    end

end
