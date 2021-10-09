class Affiliation < ApplicationRecord
  has_many :people_affiliations, class_name: "PeopleAffiliations"

  has_many :people, through: :people_affiliations

  validates :name, presence: {message: "Affiliation name can't be blank"}
end
