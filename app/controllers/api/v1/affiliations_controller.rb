module Api
  module V1
    class AffiliationsController < ApplicationController
      skip_before_action :verify_authenticity_token 

      def index
        @affiliations = Affiliation.all

        render json: @affiliations
      end

    end
  end
end  