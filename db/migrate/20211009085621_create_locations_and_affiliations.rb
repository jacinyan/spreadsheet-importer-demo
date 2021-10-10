class CreateLocationsAndAffiliations < ActiveRecord::Migration[6.1]
  def change
    create_table :locations do |t|
      t.string :name
      t.timestamps
    end

    create_table :affiliations do |t|
      t.string :name
      t.timestamps
    end
  end
end
