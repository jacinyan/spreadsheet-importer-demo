class Person < ApplicationRecord
  validates :first_name, presence: {message: "First name can't be blank"}

  has_many :people_locations, class_name: "PeopleLocations"
  has_many :people_affiliations, class_name: "PeopleAffiliations"

  has_many :locations, through: :people_locations
  has_many :affiliations, through: :people_affiliations

end
