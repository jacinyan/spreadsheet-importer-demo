module Api
  module V1
    class AffiliationsController < ApplicationController
      protect_from_forgery with: :null_session 

      def index
        @affiliations = Affiliation.all
        render json: AffiliationSerializer.new(@affiliations).serializable_hash.to_json
      end

      def create
        @affiliation = Affiliation.create(affiliation_params)

        if @affiliation.save
          render json: AffiliationSerializer.new(@affiliation).serializable_hash.to_json
        else 
          render json: {error: @affiliation.errors.messages}, status: 422
        end
      end 

      private 

      def affiliation_params
        params.require(:affiliation).permit(:name)
      end
      
    end
  end
end  