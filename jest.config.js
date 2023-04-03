module.exports = {
  testEnvironment: "node",
  testMatch: ["**/__tests__/**/*.js", "**/tests/**/*.js"],
  verbose: true,
  forceExit: true,
  clearMocks: true,
  transform: {
    "^.+\\.js$": "babel-jest",
  },
  setupFilesAfterEnv: ["jest-extended"],
  globals: {
    sequelize: {
      dialect: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: process.env.DB_PASSWORD,
      database: "mydatabase",
      logging: false,
    },
  },
};
