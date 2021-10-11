class LocationSerializer < ActiveModel::Serializer
  attributes :id, :name

  has_many :people, through: :people_locations
end
