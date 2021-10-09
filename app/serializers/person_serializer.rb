class PersonSerializer
  include JSONAPI::Serializer
  attributes :first_name, :last_name, :species, :gender, :weapon, :vehicle

  has_many :locations, through: :people_locations
  has_many :affiliations, through: :people_affiliations
end
