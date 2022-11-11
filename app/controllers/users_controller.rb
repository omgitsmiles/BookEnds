class UsersController < ApplicationController

    def create
        user = User.create!(user_params)
    end

    private

    def user_params
        params.permit(:username, :email, :quote, :password, :password_confirmation)
    end

end
