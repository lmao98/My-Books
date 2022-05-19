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
    database: "my-books_production",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true,
      },
    },
  },
};
