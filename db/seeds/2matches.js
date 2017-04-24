exports.seed = knex => knex('matches').del()

    .then(() => knex('matches').insert([
      {
        id: 1,
        user_id1: 1,
        user_id2: 2,
        is_matched: true,
      },
      {
        id: 2,
        user_id1: 3,
        user_id2: 4,
        is_matched: false,
      },
    ]));
