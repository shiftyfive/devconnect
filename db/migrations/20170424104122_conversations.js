exports.up = (knex) => {
  return knex.schema.createTable('matches', (table) => {
    table.increments();
    table.foreign('match_id').refrences(matches.id);
  });
};
exports.down = (knex) => {
  knex.schema.dropTable('matches');
};
