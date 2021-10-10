class LocationSerializer
  include JSONAPI::Serializer
  attributes :name

  has_many :people, through: :people_locations
end
