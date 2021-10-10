class Affiliation < ApplicationRecord
  has_many :people_affiliations, class_name: 'PeopleAffiliations'

  has_many :people, through: :people_affiliations

  #validates_uniqueness_of :affiliation_id
end
