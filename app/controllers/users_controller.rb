class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user
    end

    def show_me
        user = User.find_by(id: session[:user_id])
        render json: user
    end

    private

    def user_params
        params.permit(:email, :fname, :lname, :password, :password_confirmation, :id, :address, :city, :zipCode, :state)
    end
end
