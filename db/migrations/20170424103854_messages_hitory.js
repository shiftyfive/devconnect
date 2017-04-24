exports.up = (knex) => {
  return knex.schema.createTable('matches', (table) => {
    table.increments();
    table.foreign('conversation_id').refrences(conversations.id)
    table.foreign('sent_by').refrences(users.id)
    table.text('message_content')
    table.timestamps(true, true);
  });
};
exports.down = (knex) => {
  knex.schema.dropTable('matches');
};
