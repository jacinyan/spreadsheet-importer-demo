class PeopleLocations < ActiveRecord::Base
  self.table_name = 'people_locations'

  belongs_to :person
  belongs_to :location 
  
end