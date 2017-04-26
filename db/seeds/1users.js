
exports.seed = knex => knex('users').del()

    .then(() => knex('users').insert([
      {
        id: 1,
        first_name: 'Austin',
        last_name: 'Mathews',
        user_name: 'Lonedawg007',
        email: 'AmericanHockeyJesus@gmail.com',
        img_url:'http://keenthemes.com/preview/metronic/theme/assets/pages/media/profile/profile_user.jpg',
        bio:'Grew up in a small town in Oregon, but always wished I was from Texas.',
        skills:'JavaScript, HTML, CSS, your mom',
        hashed_password: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS',
      },
      {
        id: 2,
        first_name: 'April',
        last_name: 'Ludgate',
        user_name: 'April.L',
        email: 'april.l@parksandrec.gov',
        hashed_password: '',
      },
      {
        id: 3,
        first_name: 'Jeremy',
        last_name: 'Jacobs',
        user_name: 'firstNamesOnly',
        email: 'twofirstnames@hotmail.com',
        hashed_password: '',
      },
      {
        id: 4,
        first_name: 'Corrin',
        last_name: 'Lynn',
        user_name: 'rhymingScheme',
        email: 'flynn@gmail.com',
        hashed_password: '',
      },
      {
        id: 5,
        first_name: 'Gregory',
        last_name: 'Hanzel',
        user_name: 'pantsOnHead',
        email: 'cvs2@gmail.com',
        hashed_password: '',
      },
      {
        id: 6,
        first_name: 'Cynthia',
        last_name: 'Bozak',
        user_name: 'secondLineCenter',
        email: 'bozak.c@gmail.com',
        hashed_password: '',
      },
      {
        id: 7,
        first_name: 'Dwight',
        last_name: 'Schrute',
        user_name: 'Regional_Manager',
        email: 'd.schrute@dmifflin',
        hashed_password: '',
      }

    ])).then(() => {
      return knex.raw(
        "SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));"
      )});
