exports.up = (knex) => {
  return knex.schema.createTable('conversations', (table) => {
    table.increments();
    table.integer('conection_id').references('connections.id');
  });
};
exports.down = (knex) => {
  return knex.schema.dropTable('conversations');
};
