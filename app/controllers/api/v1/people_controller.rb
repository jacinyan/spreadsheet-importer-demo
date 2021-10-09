module Api
  module v1
    class PeopleController < ApplicationController
        def index
          people = Person.all

          
        end
    end
  end
end  