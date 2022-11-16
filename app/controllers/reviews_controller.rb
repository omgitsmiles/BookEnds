class ReviewsController < ApplicationController

    def update
        user = User.find_by(id: session[:user_id])
        review = user.reviews.update(review_params)
        render json: review, status: 202
    end

    def index
        review = Review.all
        render json: review, status: 200
    end

    private

    def review_params
        params.permit(:review, :rating)
    end

end
