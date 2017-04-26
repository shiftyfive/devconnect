exports.seed = knex => knex('connections').del()

    .then(() => knex('connections').insert([
      {
        id: 1,
        user_id1: 1,
        user_id2: 2,
        is_connected: true,
      },
      {
        id: 2,
        user_id1: 3,
        user_id2: 4,
        is_connected: false,
      },
    ])).then(() => {
      return knex.raw(
        "SELECT setval('connections_id_seq', (SELECT MAX(id) FROM connections));"
      )});
