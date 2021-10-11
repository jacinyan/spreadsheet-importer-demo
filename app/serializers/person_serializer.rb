class PersonSerializer < ActiveModel::Serializer
  # include JSONAPI::Serializer
  attributes :id, :first_name, :last_name, :species, :gender, :weapon, :vehicle

  has_many :locations, through: :people_locations
  has_many :affiliations, through: :people_affiliations
end
