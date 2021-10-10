module Api
  module V1
    class LocationsController < ApplicationController
      protect_from_forgery with: :null_session 

      def index
        @locations = Location.all

        render json: LocationSerializer.new(@locations).serializable_hash.to_json
      end

      def create
        @location = Location.create(location_params)

        if @location.save
          render json: LocationSerializer.new(@location).serializable_hash.to_json
        else 
          render json: {error: @location.errors.messages}, status: 422
        end
      end 

      private 

      def location_params
        params.require(:location).permit(:name)
      end
    end
  end
end  