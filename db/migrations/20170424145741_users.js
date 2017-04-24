exports.up = (knex) => {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('first_name').notNullable().defaultTo('');
<<<<<<< HEAD:db/migrations/20170424145741_users.js
    table.string('last_name').notNullable();
    table.string('user_name').notNullable();
    table.string('email').unique().notNullable();
    table.specificType('hashed_password', 'char(60)')
=======
    table.string('last_name').notNullable().defaultTo('');
    table.string('user_name').unique().notNullable().defaultTo('');
    table.string('email').unique().notNullable().defaultTo('');
    table.specificType('hashed_password', 'char(60)').notNullable();
>>>>>>> 100b95b8d9c4351f9d0014a07129d1b314dc934f:db/migrations/20170424100223_users.js
    table.timestamps(true, true);
  });
};
exports.down = (knex) => {
  return knex.schema.dropTable('users');
};
