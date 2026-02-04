const database = require('./db');
const express = require("express");
const app = express();
const { connect } = require("./database/sequelize");
const loader = require('./loader');
const env = require('./env');
//const mongoose = require('monoose');

const swaggerUI = require('swagger-ui-express');
//const swaggerDoc = require('./swagger/openapi.json');

app.get("/", (req, res) => {
  res.status(200).json({ massage: "WORKING" });
});

//const Gateway = require('micromq/gateway');

/*const gateway = new Gateway({
    microservices: ['mailer'],
    rabbit: {
        url: "amqp://guest:guest@localhost:5672",
    },
})*/

connect()
  .then(() => {
    console.log("Connected 1");
  })
  .catch((err) => console.log(err));


async function start() {
    
    //app.use(gateway.middleware());
    app.use(loader);
    
   // app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));
}

start();

module.exports = app;