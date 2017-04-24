
exports.seed = knex => knex('users').del()

    .then(() => knex('users').insert([
      {
        id: 1,
        first_name: 'Austin',
        last_name: 'Mathers',
        email: 'AmericanHockeyJesus@gmail.com',
        hashed_password: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS',
      },
    ]));
