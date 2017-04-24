
exports.seed = knex => knex('users').del()

    .then(() => knex('users').insert([
      {
        id: 1,
        first_name: 'Austin',
        last_name: 'Mathers',
        email: 'AmericanHockeyJesus@gmail.com',
        hashed_password: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS',
      },
      {
        id: 1,
        first_name: 'Austin',
        last_name: 'Mathews',
        email: 'AmericanHockeyJesus@gmail.com',
        hashed_password: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS',
      },
      {
        first_name: 'April',
        last_name: 'Ludgate',
        email: 'april.l@parksandrec.gov',
        hashed_password: '',
      },
      {
        first_name: 'Jeremy',
        last_name: 'Jacobs',
        email: 'twofirstnames@hotmail.com',
        hashed_password: '',
      },
      {
        first_name: 'Corrin',
        last_name: 'Lynn',
        email: 'flynn@gmail.com',
        hashed_password: '',
      },
      {
        first_name: 'Gregory',
        last_name: 'Hanzel',
        email: 'cvs2@gmail.com',
        hashed_password: '',
      },
      {
        first_name: 'Cynthia',
        last_name: 'Bozak',
        email: 'bozak.c@gmail.com',
        hashed_password: '',
      },
      {
        first_name: 'Dwight',
        last_name: 'Schrute',
        email: 'd.schrute@dmifflin',
        hashed_password: '',
      },

    ]));
