const path = require('path');

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/dev_connect',
    migrations: {
      directory: path.join(__dirname, 'db', 'migrations'),
    },
    seeds: {
      directory: path.join(__dirname, 'db', 'seeds'),
    },
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, 'db', 'migrations'),
    },
    seeds: {
      direcotry: path.join(__dirname, 'db', 'seeds'),
    },
  },
};
