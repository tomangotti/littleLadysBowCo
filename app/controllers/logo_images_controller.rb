class LogoImagesController < ApplicationController
    skip_before_action :authorize, only: [:latest]

    def show
        logo = LogoImage.find(params[:id])
        render json: logo, status: :ok
    end

    def latest
        logo = LogoImage.last
        render json: logo, status: :ok
    end

    def create
        if session.include? :admin_id
            newLogo = LogoImage.create!(logo_params)
            render json: newLogo, status: :created
        end
    end

    def update
        if session.include? :admin_id
            logo = LogoImage.find(params[:id])
            if logo.update(logo_params)
                render json: logo, status: :accepted
            else
                render json: logo.errors, status: :unprocessable_entity
            end
        end
    end


    private

    def logo_params
        params.permit(:id, :photo)
    end
end
