exports.up = (knex) => {
  return knex.schema.createTable('matches', (table) => {
    table.increments();
    table.foreign('user_id1').refrences('users.id');
    table.foreign('user_id2').references('users.id');
    table.bool('is_matched');
  });
};
exports.down = (knex) => {
  knex.schema.dropTable('matches');
};
