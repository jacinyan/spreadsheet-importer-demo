module Api
  module V1
    class LocationsController < ApplicationController
      skip_before_action :verify_authenticity_token 

      def index
        @locations = Location.all

        render json: @locations
      end

    end
  end
end  