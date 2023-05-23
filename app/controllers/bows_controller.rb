class BowsController < ApplicationController
    skip_before_action :authorize, only: [:index, :show]
    def index
        bows = Bow.all
        render json: bows, status: :ok
    end

    def show
        bow = Bow.find(params[:id])
        render json: bow, status: :ok
    end

    def create
        newBow = Bow.create!(params_bows)
        render json: newBow, status: :created
    end

    def update
        bow = Bow.find(params[:id])
        if bow.update(params_bows)
            render json: bow, status: :accepted
        else
            render json: bow.errors, status: :unprocessable_entity
        end
    end


    private

    def params_bows
        params.permit(:id, :name, :description, :price, :quantity, :style, :photo)
    end

end
