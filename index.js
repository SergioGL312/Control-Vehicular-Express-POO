const express = require('express');
const morgan = require('morgan');
const app = express();

// ROuters
const conductor = require('./routes/conductores');
const licencia = require('./routes/licencias');

app.use(morgan('dev'));

app.get('/', (req, res, next) => {
    res.status(200).send("Welcome to the server!!!");
})

app.use('/cond', conductor);
app.use('/lic', licencia);

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is runing...");
});