module Api
  module V1
    class PeopleController < ApplicationController
      protect_from_forgery with: :null_session 

        def index
          @people = Person.all

          render json: PersonSerializer.new(@people).serializable_hash.to_json
        end

        def show
          #p params[:id]
          @person = Person.find_by(id: params[:id])

          render json: PersonSerializer.new(@person).serializable_hash.to_json
        end
  
        def create
          @person = Person.create(person_params)

          if @person.save
            render json: PersonSerializer.new(@person).serializable_hash.to_json
          else 
            render json: {error: @person.errors.messages}, status: 422
          end
        end

        private 

        def person_params
          params.require(:person).permit(:first_name, :last_name, :gender, :species, :weapon, :vehicle)
        end

    end
  end
end  