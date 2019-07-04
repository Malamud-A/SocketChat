
exports.up = function(knex, Promise) {
  return knex.schema.createTable('messages', (table) => {
    table.increments('message_id').unsigned().primary();
    table.text('message').notNullable();

    table.string('author').notNullable().unsigned();
    table.foreign('author')
      .references('user_id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

    table.integer('conversation').notNullable().unsigned();
    table.foreign('conversation')
      .references('conversation_id')
      .inTable('conversations')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('messages')
};
