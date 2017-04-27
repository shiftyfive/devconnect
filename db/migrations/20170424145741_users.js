exports.up = (knex) => {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('first_name').notNullable().defaultTo('');
    table.string('last_name').notNullable();
    table.string('user_name').notNullable();
    table.string('email').unique().notNullable();
    table.integer('age');
    table.string('gender');
    table.string('location');
    table.string('developer_type');
    table.text('img_url');
    table.text('twitter');
    table.text('github');
    table.text('linkedin');
    table.text('bio');
    table.string('skills');
    table.specificType('hashed_password', 'char(60)')
    table.timestamps(true, true);
  });
};
exports.down = (knex) => {
  return knex.schema.dropTable('users');
};
