# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

people = Person.create(
  [
    { first_name: 'Darth', last_name: 'Vader', species: 'Human', gender: 'Male', weapon: 'Lightsaber',
      vehicle: 'Tiefighter' },
    { first_name: 'Chewbacca', species: 'Wookie', gender: 'm', weapon: 'Bowcaster', vehicle: 'Millennium Falcon' },
    { first_name: 'yoda', species: 'Unknown', gender: 'Male', weapon: 'Lightsaber' },
    { first_name: 'Princess Leia', species: 'Human', gender: 'Female', weapon: 'Blaster Pistol' },
    { first_name: 'Jar Jar', last_name: 'Binks', species: 'Gungan', gender: 'Male', weapon: 'Energy Ball',
      vehicle: 'Gungan Bongo Submarine' }
  ]
)

people_locations = Location.create(
  [
    {
      name: 'Tatooine'
    },
    {
      name: 'kashyyk'
    },
    {
      name: 'Cloud City'
    },
    {
      name: 'Death Star'
    },
    {
      name: 'Naboo'
    },
    {
      name: 'Stewjon'
    },
    {
      name: 'Kamino'
    },
    {
      name: 'Yoda''s Hutt'
    }
  ]
)

people_affiliations = Affiliation.create(
  [
    { name: 'Sith' },
    { name: 'Jedi Order' },
    { name: 'Galactic Republic' },
    { name: 'Rebel Alliance' },
    { name: 'Hutt Clan' },
    { name: 'The Resistance' },
    { name: 'Gungan Grand Army' }

  ]
)

people_affiliations = PeopleAffiliations.create(
  [
    {
      person_id: '1', affiliation_id: '1'
    },
    {
      person_id: '2', affiliation_id: '4'
    },
    {
      person_id: '3', affiliation_id: '2'
    },
    {
      person_id: '4', affiliation_id: '4'
    },
    {
      person_id: '4', affiliation_id: '3'
    },
    {
      person_id: '5', affiliation_id: '3'
    },
    {
      person_id: '5', affiliation_id: '7'
    }
  ]
)

people_locations = PeopleLocations.create(
  [
    {
      person_id: '1', location_id: '3'
    },
    {
      person_id: '1', location_id: '1'
    },
    {
      person_id: '2', location_id: '2'
    }
  ]
)
