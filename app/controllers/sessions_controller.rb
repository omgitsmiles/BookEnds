class SessionsController < ApplicationController

    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: 201
        else
            render json: { error: "Invalid Username or Password" }, status: 401
        end
    end

end
