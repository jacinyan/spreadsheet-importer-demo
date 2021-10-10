module Api
  module V1
    class PeopleController < ApplicationController
      skip_before_action :verify_authenticity_token 

        def index
          @people = Person.all

          render json: PersonSerializer.new(@people).serializable_hash.to_json
        end

        # TODO: move logic into models
        def create
          curr_people_locations = PeopleLocations.all.to_a
          curr_people_affiliations = PeopleAffiliations.all.to_a
          curr_locations = Location.all.to_a
          curr_affiliations = Affiliation.all.to_a
          curr_people = Person.all.to_a
          
          # loop through array of person objects
          params.permit![:_json].each do |person|
            next if person[:affiliations].nil? || person[:affiliations].empty?

            hashed_person = person.to_hash 
            @person = Person.new(hashed_person.slice!('locations','affiliations'))
                if @person.save
                  curr_people << @person
                else 
                  render json: {error: @person.errors.messages}, status: 422
                end 
            
            hashed_person.fetch_values("locations").flatten.each {
              |location|
              location = Location.find_by(name: location)
              location = Location.new(name: location) unless location

              if location.save      
                curr_people_locations << PeopleLocations.create(person_id: @person.id, location_id: location.id)
              end 
            }
            hashed_person.fetch_values("affiliations").flatten.each {
              |affiliation| 
              affiliation = Affiliation.find_by(name: affiliation)
              affiliation = Affiliation.new(name: affiliation)unless affiliation

              if affiliation.save 
                curr_people_affiliations << PeopleAffiliations.create(person_id:@person.id, affiliation_id: affiliation.id)
              end 
            }  

          end
        end

    end
  end
end  