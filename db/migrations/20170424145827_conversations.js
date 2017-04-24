exports.up = (knex) => {
  return knex.schema.createTable('conversations', (table) => {
    table.increments();
    table.integer('match_id').references('matches.id');
  });
};
exports.down = (knex) => {
  return knex.schema.dropTable('conversations');
};
