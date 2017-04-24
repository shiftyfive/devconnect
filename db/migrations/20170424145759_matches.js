exports.up = (knex) => {
  return knex.schema.createTable('matches', (table) => {
    table.increments();
    table.integer('user_id1').references('users.id')
    table.integer('user_id2').references('users.id');
    table.bool('is_matched');
  });
};
exports.down = (knex) => {
  return knex.schema.dropTable('matches');
};
