const Sequelize = require("sequelize");
const config = require("../config/sequelize");

const sequelize = new Sequelize("postgres", "postgres", "123", config);

const connect = async () => {
  const models = require("../models");

  await sequelize.authenticate();
  Object.values(models).forEach((model) => {
    model.associate && model.associate(models);
  });

  await sequelize.sync({ alter: true });
  //await sequelize.sync({ forced: true });
};

module.exports = { sequelize, Sequelize, connect };

