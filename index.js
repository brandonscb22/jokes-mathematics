const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const jokesRoutes = require('./routes/jokesRoutes');
const mathsRoutes = require('./routes/mathsRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/jokes', {}).then(() => console.log("connected to db"))
.catch((e) => console.log(e));

app.use('/jokes', jokesRoutes);
app.use('/maths', mathsRoutes);

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Jokes & Mathematics API",
      version: "1.0",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);

app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});

module.exports = app;