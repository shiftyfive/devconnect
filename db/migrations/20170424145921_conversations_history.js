exports.up = (knex) => {
  return knex.schema.createTable('conversations_history', (table) => {
    table.increments();
    table.integer('conversation_id').references('conversations.id')
    table.integer('sent_by').references('users.id')
    table.text('message_content')
    table.timestamps(true, true);
  });
};
exports.down = (knex) => {
  return knex.schema.dropTable('conversations_history');
};
