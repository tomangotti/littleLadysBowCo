class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :ok
    end

    def show_me
        user = User.find(_by(id: session[:user_id]))
        render json: user, status: :ok
    end

    private

    def user_params
        params.permit(:email, :fname, :lname, :password, :password_confirmation, :id)
    end
end
