require("dotenv").config();
module.exports = {
  development: {
    database: "my-books_development",
    dialect: "postgres",
  },
  test: {
    database: "my-books_test",
    dialect: "postgres",
  },
  production: {
    database: process.env.DATASE_URL || 'database_is_not_set',
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true,
      },
    },
  },
};
