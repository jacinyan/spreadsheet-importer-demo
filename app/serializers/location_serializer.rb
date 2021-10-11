class LocationSerializer < ActiveModel::Serializer
  # include JSONAPI::Serializer
  attributes :id, :name

  has_many :people, through: :people_locations
end
