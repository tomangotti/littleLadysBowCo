class CartsController < ApplicationController

    def create
        if existItem = Cart.find_by(bow_id: params[:bow_id], user_id: params[:user_id])
            existItem.quantity += params[:quantity].to_i
            existItem.save
            render json: existItem
        else
            cartItem = Cart.create!(cart_params)
            render json: cartItem, status: :ok
        end
    end

    def get_user_cart
        cart = User.find(params[:id]).carts
        render json: cart
    end

    def update
        updateItem = Cart.find_by(id: params[:id])
        updateItem.update(cart_params)
        render json: updateItem
    end

    def destroy
        item = Cart.find(params[:id])
        item.destroy
        head :no_content
    end



    private

    def cart_params
        params.permit(:id, :bow_id, :user_id, :quantity)
    end
end
