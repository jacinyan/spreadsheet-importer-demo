class AffiliationSerializer
  include JSONAPI::Serializer
  attributes :name

  has_many :people, through: :people_affiliations
end
