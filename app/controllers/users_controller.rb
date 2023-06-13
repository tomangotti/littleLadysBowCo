class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
        @user = User.create!(user_params)
        session[:user_id] = @user.id
        UserMailer.with(user: @user).welcome_email.deliver_now
        # redirect_to(@user, notice: 'User was successfully created.')
        render json: @user
        # respond_to do |format|
        #     if @user.save
        #         # Tell the UserMailer to send a welcome email after save
        #         UserMailer.with(user: @user).welcome_email.deliver_now
        #         format.html { redirect_to(@user, notice: 'User was successfully created.') }
        #         format.json { render json: @user, status: :created, location: @user }
        #     else
        #         format.html { render action: 'new' }
        #         format.json { render json: @user.errors, status: :unprocessable_entity }
        #     end
        # end
    end

    def show_me
        @user = User.find_by(id: session[:user_id])
        cart = @user.carts
        UserMailer.with(user: @user).welcome_email.deliver_now
        render json: @user
    end

    def update
        user = User.find(params[:id])
        user.update(user_params)
        render json: user
    end

    private

    def user_params
        params.permit(:email, :fname, :lname, :password, :password_confirmation, :id, :address, :city, :zipCode, :state)
    end
end
