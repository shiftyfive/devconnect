exports.seed = knex => knex('conversations').del()

    .then(() => knex('conversations').insert([
      {
        id: 1,
        match_id: 1,
      },
    ]));
