import { rest } from 'msw';

export const handlers = [
  rest.get('api/v1/people'),
  (req, res, ctx) => {
    return ctx.json([
      {
        first_name: 'Sheev',
        last_name: 'Palpatine',
        locations: ['Naboo'],
        species: 'Human',
        gender: 'Male',
        affiliations: ['Galactic Republic'],
        weapon: 'Lightsaber',
        vehicle: '',
      },
      {
        first_name: 'luke',
        last_name: 'skywalker',
        locations: ['Naboo'],
        species: 'Human',
        gender: 'M',
        affiliations: ['Galactic Republic', 'Jedi Order'],
        weapon: 'Lightsaber',
        vehicle: 'X-wing Starfighter',
      },
      {
        first_name: 'Boba',
        last_name: 'Fett',
        locations: ['Kamino'],
        species: 'Human',
        gender: 'm',
        affiliations: ['Galactic Republic', 'Jedi Order'],
        weapon: 'Lightsaber',
        vehicle: 'X-wing Starfighter',
      },
    ]);
  },
];
