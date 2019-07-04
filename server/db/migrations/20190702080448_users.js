
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.string('user_id').unsigned().primary();
    table.string('user_name').notNullable().unique();
    
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
