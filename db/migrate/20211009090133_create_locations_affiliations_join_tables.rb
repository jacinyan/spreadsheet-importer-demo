class CreateLocationsAffiliationsJoinTables < ActiveRecord::Migration[6.1]
  def change
    create_table :people_locations do |t|
      t.integer :person_id
      t.integer :location_id
    end

    create_table :people_affiliations do |t|
      t.integer :person_id
      t.integer :affiliation_id
    end
  end

end