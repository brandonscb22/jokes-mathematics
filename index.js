const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jokesRoutes = require('./routes/jokesRoutes');
const mathsRoutes = require('./routes/mathsRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/jokes', {}).then(() => console.log("connected to db"))
.catch((e) => console.log(e));

app.use('/jokes', jokesRoutes);
app.use('/maths', mathsRoutes);

app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});

module.exports = app;