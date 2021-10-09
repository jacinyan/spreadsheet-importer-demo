class Location < ApplicationRecord
  has_many :people_locations, class_name: "PeopleLocations"

  has_many :people, through: :people_locations
end
