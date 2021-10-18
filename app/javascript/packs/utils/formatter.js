import _ from 'lodash';

export const formatter = (fileData) => {
  // convert each array to an object
  const people = fileData.map((item) => {
    const first_name = item[0].match(/the|princess/gi)
      ? _.upperFirst(item[0])
      : item[0].split(' ').length === 1
      ? _.upperFirst(item[0].split(' ').join(' '))
      : _.upperFirst(item[0].split(' ').slice(0, -1).join(' '));

    const last_name =
      item[0].match(/the|princess/gi) || item[0].split(' ').length === 1
        ? ''
        : _.upperFirst(item[0].split(' ').slice(-1).join(' '));
    // console.log(last_name);
    const locations = item[1].split(',').map((item) => _.upperFirst(item));
    const species = item[2];

    const gender = item[3].match(/^male$|^m$/i)
      ? 'Male'
      : item[3].match(/^female$|^f$/i)
      ? 'Female'
      : 'Other';

    const affiliations = item[4] ? item[4].split(',') : [];
    // TODO: invalid character filtering with regex for weapon and vehicle
    const weapon = item[5];
    const vehicle = item[6];

    return {
      first_name,
      last_name,
      locations,
      species,
      gender,
      affiliations,
      weapon,
      vehicle,
    };
  });

  return people;
};
