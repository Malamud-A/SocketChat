exports.seed = (knex, Promise) => {
  return knex('conversations').del()
    .then(() => {
      return knex('conversations').insert([
        { subject: 'Test1' },
        { subject: 'Test2' },
        { subject: 'Test3' },
      ]);
    });
};
