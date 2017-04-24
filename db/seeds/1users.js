
exports.seed = knex => knex('users').del()

    .then(() => knex('users').insert([
      {
        id: 1,
        first_name: 'Austin',
        last_name: 'Mathews',
        email: 'AmericanHockeyJesus@gmail.com',
        hashed_password: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS',
      },
      {
        id: 2,
        first_name: 'April',
        last_name: 'Ludgate',
        email: 'april.l@parksandrec.gov',
        hashed_password: '',
      },
      {
        id: 3,
        first_name: 'Jeremy',
        last_name: 'Jacobs',
        email: 'twofirstnames@hotmail.com',
        hashed_password: '',
      },
      {
        id: 4,
        first_name: 'Corrin',
        last_name: 'Lynn',
        email: 'flynn@gmail.com',
        hashed_password: '',
      },
      {
        id: 5,
        first_name: 'Gregory',
        last_name: 'Hanzel',
        email: 'cvs2@gmail.com',
        hashed_password: '',
      },
      {
        id: 6,
        first_name: 'Cynthia',
        last_name: 'Bozak',
        email: 'bozak.c@gmail.com',
        hashed_password: '',
      },
      {
        id: 7,
        first_name: 'Dwight',
        last_name: 'Schrute',
        email: 'd.schrute@dmifflin',
        hashed_password: '',
      },

    ]));
