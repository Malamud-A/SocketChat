
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users_conversations', (table) => {
    table.integer('conversation_id').unsigned().notNullable();
    table.foreign('conversation_id')
      .references('conversation_id')
      .inTable('conversations')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    
    table.string('user_id').unsigned().notNullable();
    table.foreign('user_id')
      .references('user_id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    
    table.primary(['conversation_id', 'user_id'])
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users_conversations');
};
