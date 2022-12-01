class SessionsController < ApplicationController
    before_action :authorize, only: :destroy

    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: 201
        else
            render json: { error: ["Invalid Username or Password"] }, status: 401
        end
    end

    def destroy
        if session[:user_id]
            session.delete :user_id
            head :no_content
        else
            render json: { error: ["Not authorized"] }, status: 401
        end
    end

    private

    def authorize 
        render json: { error: ["Must be logged in!"] }, status: 401 unless session[:user_id]
    end

end
