class PeopleAffiliations < ActiveRecord::Base
  self.table_name = 'people_affiliations'

  validates_presence_of :name

  belongs_to :person
  belongs_to :affliation 
end