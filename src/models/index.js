const Sequelize = require('sequelize');

// eslint-disable-next-line no-undef
const { PGDATABASE, PGUSER, PGPASSWORD, PGHOST, PGPORT } = process.env;

const setupDatabase = () => {
  const connection = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
    host: PGHOST,
    port: PGPORT,
    dialect: 'postgres',
    logging: false,
  });

  connection.sync({ alter: true });
};

module.exports = setupDatabase();
