class UsersController < ApplicationController

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: 201
    end

    def show
        user = User.find_by(username: session[:user_id])
        if user
            render json: user, status: 201
        else
            render json: { error: "Invalid Username or Password" }, status: 401
        end
    end

    private

    def user_params
        params.permit(:username, :email, :quote, :password)
    end

end
