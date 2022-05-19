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
    use_env_variable: 'DATABASE_URL',
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true,
      },
    },
  },
};
