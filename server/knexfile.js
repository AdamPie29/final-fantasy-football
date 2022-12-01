require('dotenv').config;
// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const HOST = process.env.HOST;
const USER = process.env.USER;
const PASSWORD = process.env.PASSWORD;
const DATABASE = process.env.DATABASE;

module.exports = {
    client: "mysql",
    connection: {
      host: HOST,
      user: USER,
      password: PASSWORD,
      database: DATABASE,
      charset: "utf8"
    },
};