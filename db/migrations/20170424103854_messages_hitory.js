exports.up = (knex) => {
  return knex.schema.createTable('message_history', (table) => {
    table.increments();
    table.integer('conversation_id').refrences(conversations.id)
    table.integer('sent_by').refrences(users.id)
    table.text('message_content')
    table.timestamps(true, true);
  });
};
exports.down = (knex) => {
  knex.schema.dropTable('message_history');
};
