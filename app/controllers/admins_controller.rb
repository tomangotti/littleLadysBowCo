class AdminsController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
        admin = Admin.create!(admin_params)
        session[:admin_id] = admin.id
        render json: admin
    end

    def show_me
        admin = admin.find_by(id: session[:admin_id])
        render json: admin
    end

    def update
        admin = admin.find(params[:id])
        admin.update(admin_params)
        render json: admin
    end

    private

    def admin_params
        params.permit(:email, :password, :password_confirmation, :id)
    end
end
