class AffiliationSerializer < ActiveModel::Serializer
  # include JSONAPI::Serializer
  attributes :id, :name

  has_many :people, through: :people_affiliations
end
