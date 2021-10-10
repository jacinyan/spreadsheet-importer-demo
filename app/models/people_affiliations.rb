class PeopleAffiliations < ActiveRecord::Base
  self.table_name = 'people_affiliations'

  validates_presence_of :affiliation

  belongs_to :person
  belongs_to :affiliation 
end