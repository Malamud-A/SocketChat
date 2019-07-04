exports.up = (knex, Promise) => {
  return knex.schema.createTable('conversations', (table) => {
    table.increments('conversation_id').unsigned().primary();
    table.string('subject').notNullable();
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now())
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('conversations');
};
