module Api
  module V1
    class PeopleController < ApplicationController
      skip_before_action :verify_authenticity_token 

        def index         
          if params[:page]
            @params = {number: nil, size:nil}

            @params[:number] = params.permit![:page].to_hash['number'].to_i
            @params[:size] = params.permit![:page].to_hash['size'].to_i
          else
            @params = {number: 1, size: 10}
          end

          @people = Person.page(@params[:number]).per_page(@params[:size])

          total_count = Person.all.count

          render  json: @people, meta: {total_count: total_count, page:@params[:number], page_size: @params[:size]}
          
        end

        # TODO: move logic into models
        def create_all
          curr_people_locations = PeopleLocations.all.to_a
          curr_people_affiliations = PeopleAffiliations.all.to_a
          curr_locations = Location.all.to_a
          curr_affiliations = Affiliation.all.to_a
          curr_people = Person.all.to_a
          

          # loop through array of person objects
          params.permit![:people].each do |person|
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
              _location = Location.find_by(name: location)
              _location = Location.new(name: location) unless _location

              if _location.save      
                curr_people_locations << PeopleLocations.create(person_id: @person.id, location_id: _location.id)
              end 
            }
            hashed_person.fetch_values("affiliations").flatten.each {
              |affiliation| 
              _affiliation = Affiliation.find_by(name: affiliation)
              _affiliation = Affiliation.new(name: affiliation) unless _affiliation

              if _affiliation.save 
                curr_people_affiliations << PeopleAffiliations.create(person_id:@person.id, affiliation_id: _affiliation.id)
              end 
            }  

          end
        end

    end
  end
end  