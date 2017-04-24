exports.up = (knex) => {
  return knex.schema.createTable('conversations', (table) => {
    table.increments();
    table.integer('match_id').refrences(matches.id);
  });
};
exports.down = (knex) => {
  knex.schema.dropTable('conversations');
};
