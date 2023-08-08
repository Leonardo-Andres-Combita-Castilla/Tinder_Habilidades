// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host:'containers-us-west-84.railway.app',
      port:'7573',
      database: 'Tinder_Habilidades',
      user:     'postgres',
      password: 'LCo08qsRC8C0Ut6czBsC'
    },
    useNullAsDefault: true,
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      host:'containers-us-west-84.railway.app',
      port:'7573',
      database: 'Tinder_Habilidades',
      user:     'postgres',
      password: 'LCo08qsRC8C0Ut6czBsC'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
