exports.seed = knex => knex('conversations').del()

    .then(() => knex('conversations').insert([
      {
        id: 1,
        match_id: 1,
      },
    ])).then(() => {
      return knex.raw(
        "SELECT setval('conversations_id_seq', (SELECT MAX(id) FROM conversations));"
      )});
