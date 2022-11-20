class UsersController < ApplicationController
    before_action :authorize, only: :update

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: 201
    end

    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json: user, status: 200
        else
            render json: { error: "Invalid Username or Password" }, status: 401
        end
    end

    def update
        user = User.find_by(id: session[:user_id])
        user.update!(user_params)
        render json: user, status: 201
    end

    private

    def authorize 
        render json: { error: ["Must be logged in to update!"] }, status: 401 unless session[:user_id]
    end

    def user_params
        params.permit(:username, :email, :quote, :password, :avatar)
    end

end
