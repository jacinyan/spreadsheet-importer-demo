# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

people = Person.create([
  {first_name:'test1', last_name:'test1', species:'Human', gender:'Male', weapon:'Lightsaber',vehicle:'Tiefighter'},
  {first_name:'test2', last_name:'test2', species:'Unknown', gender:'Male', weapon:'Lightsaber'}
  ])

locations = Location.create(
  [
  {
    name:"Tatooine"
  },
  {
    name: 'Cloud City'
  },
  {
    name:"Death Star"
  },
  {
    name:"Naboo"
  },
  {
    name:"Stewjon"
  },
  {
    name:"Kamino"
  },
]
)

affiliations = Affiliation.create(
  [
    {name:'Jedi Order'},
    {name:'Galactic Republic'},
    {name:'Rebel Alliance'},
    {name:'Hutt Clan'},
    {name:'The Resistance'}
  ]
)