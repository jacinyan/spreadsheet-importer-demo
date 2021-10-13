export const formatter = (fileData) => {
  // convert each array to a object
  const people = fileData.map((item) => {
    const first_name = item[0].match(/the|princess/gi)
      ? item[0]
      : item[0].split(' ').length === 1
      ? item[0].split(' ').join(' ')
      : item[0].split(' ').slice(0, -1).join(' ');
    // console.log(first_name);
    const last_name =
      item[0].match(/the|princess/gi) || item[0].split(' ').length === 1
        ? ''
        : item[0].split(' ').slice(-1).join(' ');
    // console.log(last_name);
    const locations = item[1].split(',');
    const species = item[2];
    const gender = item[3];
    const affiliations = item[4] ? item[4].split(',') : [];
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
