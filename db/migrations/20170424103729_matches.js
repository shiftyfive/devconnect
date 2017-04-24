exports.up = (knex) => {
  knex.schema.createTable('matches', (table) => {
    table.increments();
    table.integer('user_id1').refrences('users.id').notNullable();
    table.integer('user_id2').references('users.id');
    table.bool('is_matched');
  });
};
exports.down = (knex) => {
  knex.schema.dropTable('matches');
};
